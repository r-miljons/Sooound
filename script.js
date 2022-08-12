// -------------- Nav bar ----------------------

function renderNavBar() {
    const htmlData = `<div class="space-cart">
        <div class="space-navlogo">
            <img src="${fixRelativePath("../assets/hamburger.svg")}" alt="menu" class="hamburger">
            <img onclick="location.href='${fixRelativePath("../index.html")}'" class="logo" src="${fixRelativePath("../assets/Sooound-logo.svg")}" alt="sooound logo">
            <nav>
                <ul>
                    <li><a href="${fixRelativePath("../index.html")}">Home</a></li>
                    <li><a href="${fixRelativePath("../guitars/guitars.html")}">Guitars</a></li>
                    <li><a href="${fixRelativePath("../synths/synths.html")}">Synths</a></li>
                    <li><a href="${fixRelativePath("../amps/amps.html")}">Amps</a></li>
                </ul>
            </nav>
        </div>
        <div class="cart-wrap"></div>
    </div>`

    document.querySelector('.nav-wrap').innerHTML = htmlData;
}
renderNavBar();

function renderMobileNavBar() {
    const htmlData = `<button class="exit-menu">Done</button>
    <ul class="side-menu-nav">
        <li><a href="${fixRelativePath("../index.html")}">Home</a></li>
        <li><a href="${fixRelativePath("../guitars/guitars.html")}">Guitars</a></li>
        <li><a href="${fixRelativePath("../synths/synths.html")}">Synths</a></li>
        <li id="bottom-border"><a href="${fixRelativePath("../amps/amps.html")}">Amps</a></li>
    </ul>`
    const sideMenu = document.createElement("div");
    sideMenu.className = "side-menu";
    sideMenu.innerHTML = htmlData;
    document.body.appendChild(sideMenu);
    sideMenu.style.animation = "slideIn 0.3s forwards";

    setTimeout(() => {
        document.addEventListener('click', closeWhenClickedOutside);
        document.querySelector('.exit-menu').addEventListener('click', closeNav);
    }, 300);

    function closeNav() {
        try {
            sideMenu.style.animation = 'slideOut 0.3s forwards';
            document.removeEventListener('click', closeNav);
            document.querySelector('.exit-menu').removeEventListener('click', closeNav);
            setTimeout(() => {
                try {
                    document.body.removeChild(sideMenu);
                } catch (e) {
                    return;
                }
            }, 300);
        } catch (e) {
            return;
        }
    }

    function closeWhenClickedOutside(e) {
        if (document.querySelector('.side-menu')) {
            if (document.querySelector('.side-menu').contains(e.target)){
                return;
            } else {
                closeNav();
            }
        }
    }
}

document.querySelector('.hamburger').addEventListener('click', renderMobileNavBar);

// -------------- Rendering indivudial products per category ----------------------

import { amplifiers, synthesizers, guitars } from "./products.js";

// ------------- Shopping cart --------------------

let cart = [
    {
        id: "amp1",
        amount: 0
    },
    {
        id: "amp2",
        amount: 3
    },
    {
        id: "guitar2",
        amount: 3
    },
    {
        id: "synth4",
        amount: 3
    }
];

//sends cart data to the local storage
async function updateCartStorage() {
    let _cart = JSON.stringify(cart);
    await localStorage.setItem("cart_key", _cart);
}

//pulls cart data from local storage
function retrieveCartData() {
    let _data = localStorage.getItem("cart_key");
    if (_data) {
        cart = JSON.parse(_data);
    } else {
        cart = [];
        updateCartStorage();
    }
}

//adds items to cart array and saves data to local storage
function addToCart(e) {
    if (cart.length > 0 && cart.filter(x => x.id === e.id).length > 0) {
        cart.forEach(x => {
            if (x.id === e.id) {
                x.amount += Number(document.querySelector('.amount').value);
            }});
        updateCartStorage();
        renderCartIcon();
    } else {
        cart.push({
            id: e.id,
            amount: Number(document.querySelector('.amount').value)
        })
        updateCartStorage();
        renderCartIcon();
    }
}

// makes so that generated hmtl can use this function
window.addToCart = addToCart;

// fix relative paths for shopping cart thumbnails to work one step up the tree
function fixRelativePath(path) {
    if (window.location.href.endsWith("index.html")) {
        if (path.startsWith("..")) {
            const chars = path.split('');
            chars.shift();
            let updatedPath = chars.join('');
            return updatedPath;
        } else {
            return path;
        }
    } else {
        return path;
    }
}

//dumb solution for overflowing thumbnails
function adjustCartThumbnails(string) {
    if (string.startsWith("synth")) {
        return "wide";
    } else {
        return "tall";
    }
}

//returns a number of current amount of items in the cart
function cartItemCount() {
    retrieveCartData();
    if (cart.length > 0) {
        let totalItems = 0;
        cart.forEach(x => {
            totalItems += x.amount;
        })
        return totalItems;
    } else {
        return 0;
    }
}

//if cart is empty, can't checkout
function cantCheckout() {
    if (cart.length == 0) {
        document.querySelector('.checkout').style.backgroundColor = 'rgb(132, 132, 132)';
        document.querySelector('.checkout').title = 'Add something to your cart before checking out.';
        document.querySelector('.checkout').style.cursor = 'not-allowed';
        document.querySelector('.checkout').onclick = () => {return};
    } else {
        document.querySelector('.checkout').style.backgroundColor = '';
        document.querySelector('.checkout').onclick = () => {location.href=`${fixRelativePath('../checkout/checkout.html')}`};
    }
}

//adjust the item count by clicking + or -
function adjustItemCount() {
    
    cart.forEach((x, index) => {
        if (document.querySelector(`#${x.id}.remove-icon`)) {
            document.querySelector(`#${x.id}.remove-icon`).addEventListener('click', () => {
                if (x.amount > 1) {
                    x.amount -= 1;
                } else if (x.amount == 1) {
                    cart.splice(index, 1);
                }
                updateCartStorage();
                renderCartIcon();
                if (document.querySelector(".shopping-cart")) {
                    document.querySelector(".shopping-cart").remove();
                    renderShoppingCart();
                } else {
                    renderShoppingCart();
                }
            })
        }

        if (document.querySelector(`#${x.id}.add-icon`)) {
            document.querySelector(`#${x.id}.add-icon`).addEventListener('click', () => {
                x.amount += 1;
                updateCartStorage();
                renderCartIcon();
                if (document.querySelector(".shopping-cart")) {
                    document.querySelector(".shopping-cart").remove();
                    renderShoppingCart();
                } else {
                    renderShoppingCart();
                }
            })
        }
    })
};

//used to format the total price of items in cart
const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
});

//adds decimal point to a number (2300 --> 23.00), returns a string
function addDecimal(number) {
    let array = number.toString().split('');
    array.splice(array.length - 2, 0, ".");
    let string = array.join('');
    return string;
}

//press a button to empty the cart
function emptyCart() {
    if (cart.length > 0) {
    cart = [];
    document.querySelector('.products-list').innerHTML = '<p class="cart-empty-text">Your cart is empty.</p>';
    document.querySelector('.cart-items').textContent = 0;
    document.querySelector('#total-cart-items').textContent = 0;
    document.querySelector('.total-price').textContent = '€0.00';
    cantCheckout();
    updateCartStorage();
    } else {
        return;
    }
}

//renders the little cart icon in the top-right corner
function renderCartIcon() {
    document.querySelector('.cart-wrap').innerHTML = `<div class="cart-background"></div>
    <div class="cart-items">${cartItemCount()}</div>
    <img class="cart" src="${fixRelativePath('../assets/shopping-cart.png')}" alt="shopping cart">`
}
renderCartIcon();





//---------renders the shopping cart element when cart icon is clicked-----------
function renderShoppingCart() {

    let itemsToRender = [];
    let totalPrice = 0;

    //collects data about the items that need to be rendered
    cart.forEach((x, index) => {
        for (let i in amplifiers) {
            if (x.id === amplifiers[i].id) {
                itemsToRender.push(amplifiers[i]);
                itemsToRender[index].amount = x.amount;
                totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
            }
        }
        for (let i in guitars) {
            if (x.id === guitars[i].id) {
                itemsToRender.push(guitars[i]);
                itemsToRender[index].amount = x.amount;
                totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
            }
        }
        for (let i in synthesizers) {
            if (x.id === synthesizers[i].id) {
                itemsToRender.push(synthesizers[i]);
                itemsToRender[index].amount = x.amount;
                totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
            }
        }
    });

    if (totalPrice === 0) {
        cart = [];
        updateCartStorage();
    }
  
    //adding the cents fraction to total price
    totalPrice = addDecimal(totalPrice);

    //Shopping cart div that appears when cart is clicked
    const htmlData = `<div class="cart-header">
            <p>CART (<span id="total-cart-items">${cartItemCount()}</span>)</p>
            <button class="remove-from-cart">Remove all</button>
        </div>
        <ul class="products-list">
            ${
                //renders a list of items, else displays cart empty text
                (function() {
                    retrieveCartData();
                    if (cart.length > 0) {
                        return itemsToRender.map(item => {
                            let {
                                name,
                                id,
                                price,
                                thumbnail,
                                amount
                            } = item;

                            return `<li class="cart-item">
                            <div class="cart-item-thumbnail">
                                <img class="cart-item-thumbnail-img" id="${adjustCartThumbnails(id)}" src="${fixRelativePath(thumbnail)}" alt="${name}">
                            </div>
                            <div class="cart-item-info">
                                <div class="cart-item-name-price">
                                    <p class="cart-item-name">${name}</p>
                                    <p class="cart-item-price">${priceFormatter.format(addDecimal(Number(price.replace(/[^0-9]/g, '')) * amount))}</p>
                                </div>
                            </div>
                            <div class="cart-item-amount"><img class="remove-icon" id="${id}" src="${fixRelativePath("../assets/remove_icon.svg")}" alt="remove item">${amount}<img class="add-icon" id="${id}" src="${fixRelativePath("../assets/add_icon.svg")}" alt="add item"></div>
                        </li>`;
                        }).join('')
                    } else {
                        return '<p class="cart-empty-text">Your cart is empty.</p>';
                    }
                })()
            }
        </ul>
        <div class="cart-total">
            <p class="total-text">TOTAL</p>
            <p class="total-price">${
                priceFormatter.format(totalPrice)
            }</p>
        </div>
        <button class="checkout" onclick="location.href='${fixRelativePath('../checkout/checkout.html')}'">CHECKOUT</button>`;

    const shoppingCart = document.createElement("div");
    shoppingCart.className = "shopping-cart";
    shoppingCart.innerHTML = htmlData;
    document.body.appendChild(shoppingCart);

    cantCheckout();

    adjustItemCount();

    // closes the shoppingCart when clicked outside of the div
    function closeShoppingCart(e) {
        if (document.querySelector('.shopping-cart')) {
            if (document.querySelector('.shopping-cart').contains(e.target)){
                return;
            } else {
                try {
                    document.body.removeChild(shoppingCart);
                    window.removeEventListener('click', closeShoppingCart);
                } catch (e) {
                    return;
                }
            }
        }
    }

    //press a button to empty the cart
    document.querySelector('.remove-from-cart').addEventListener('click', emptyCart);

    setTimeout(() => {
        window.addEventListener('click', closeShoppingCart);
    }, 5);
}

window.onload = () => {
    document.querySelector('.cart-wrap').addEventListener('click', () => {
        if (document.querySelector('.shopping-cart')) {
            return;
        } else {
            renderShoppingCart();
        }   
    });
}





//---------------checkout area-------------------

function renderCheckoutArea() {
    if (document.querySelector('.purchase-summary')) {
        retrieveCartData();
        let itemsToRender = [];
        let totalPrice = 0;

        //collects data about the items that need to be rendered
        cart.forEach((x, index) => {
            for (let i in amplifiers) {
                if (x.id === amplifiers[i].id) {
                    itemsToRender.push(amplifiers[i]);
                    itemsToRender[index].amount = x.amount;
                    totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
                }
            }
            for (let i in guitars) {
                if (x.id === guitars[i].id) {
                    itemsToRender.push(guitars[i]);
                    itemsToRender[index].amount = x.amount;
                    totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
                }
            }
            for (let i in synthesizers) {
                if (x.id === synthesizers[i].id) {
                    itemsToRender.push(synthesizers[i]);
                    itemsToRender[index].amount = x.amount;
                    totalPrice += Number(itemsToRender[index].price.replace(/[^0-9]/g, '')) * x.amount;
                }
            }
        });
    
        //money conversion, shipping costs 60 per item
        const totalItems = cartItemCount();
        const grandTotalPrice = addDecimal(totalPrice + (totalItems * 6000));
        totalPrice = addDecimal(totalPrice);

        const htmlData = `<h2 class="summary-text">Your Order</h2>
        <ul class="order-list">
        ${
            itemsToRender.map(item => {
                let {
                    name,
                    id,
                    price,
                    thumbnail,
                    amount
                } = item

                return `<li class="cart-item">
                <div class="cart-item-thumbnail">
                    <img class="cart-item-thumbnail-img" id="${adjustCartThumbnails(id)}" src="${thumbnail}" alt="${name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name-price">
                        <p class="cart-item-name">${name}</p>
                        <p class="cart-item-price">${priceFormatter.format(addDecimal(Number(price.replace(/[^0-9]/g, '')) * amount))}</p>
                    </div>
                </div>
                <div class="cart-item-amount">${amount}</div>
            </li>`;
            }).join('')

        }
        </ul>
        <ul class="order-total">
            <li class="order-flex">
                <p class="total-text">Total</p>
                <p class="total-amount">${priceFormatter.format(totalPrice)}</p>
            </li>
            <li class="order-flex">
                <p class="total-text">Shipping</p>
                <p class="total-amount">${priceFormatter.format(totalItems * 60)}</p>
            </li>
            <li class="order-flex grand">
                <p class="total-text">Grand Total</p>
                <p class="grand-total-amount">${priceFormatter.format(grandTotalPrice)}</p>
            </li>
        </ul>
        <input type="submit" form="checkout-form" value="CONTINUE" class="finish-order">`;

        document.querySelector('.purchase-summary').innerHTML = htmlData;
        document.querySelector('#checkout-form').addEventListener('submit', renderSuccess);

    } else {
        return;
    }
};
renderCheckoutArea();

//Success box that pops up after completing the purchase 
function renderSuccess(e) {
    e.preventDefault();
    cart = [];
    updateCartStorage();
    renderCartIcon();

    const htmlData = `<div class="success-box">
                <div class="flex-wrap">
                    <div class="success-text">
                        <h1>Success!</h1>
                        <h3>Your Purchase has been registered.</h3>
                        <p>You will recieve a confirmation email shortly.</p>
                    </div>
                    <div class="success-img">
                        <div class="orange-circle"></div>
                        <img src="../assets/checkmark.svg" alt="done">
                    </div>
                </div>
                <button class="return-home">Return to Home</button>
            </div>`;
    
    const successBox = document.createElement("div");
    successBox.className = "success-mask";
    successBox.innerHTML = htmlData;
    document.body.appendChild(successBox);

    document.querySelector('.return-home').addEventListener("click", () => {
        document.body.removeChild(successBox);
        location.href='../index.html';
    });
}





//render the product pages, product id must match the parent element id

// ------------- Amplifiers --------------------

function renderAmp() {
    
    amplifiers.forEach((x) => {
		let {
            id,
			name,
			price,
			about1,
			about2,
			features,
			thumbnail,
			gallery,
			recommended,
		} = x;

        if (document.getElementById(`${id}`)) {
        document.getElementById(`${id}`).innerHTML = `<div class="product">
            <div class="pswp-gallery" id="gallery--ampro2">
                <a href="${gallery[0].img}" 
                data-pswp-width="${gallery[0].width}" 
                data-pswp-height="${gallery[0].height}" 
                target="_blank">
                    <div class="product-img smaller-box">
                        <img src="${thumbnail}" alt="${name}">
                    </div>
                </a>
                <a href="${gallery[1].img}" 
                data-pswp-width="${gallery[1].width}"  
                data-pswp-height="${gallery[1].height}" 
                target="_blank"></a>
                <a href="${gallery[2].img}" 
                data-pswp-width="${gallery[2].width}"  
                data-pswp-height="${gallery[2].height}" 
                target="_blank"></a>
            </div>
            <div class="product-info">
                <h1>${name.toUpperCase()}</h1>
                <p class="about-product">
                    ${about1}
                    <br>
                    <br>
                    ${about2}
                </p>
                <p class="price">${price}</p>
                <div class="add-amount">
                    <input type="number" min="1" class="amount" value="1">
                    <button class="add-to-cart" onclick="addToCart(${id})">ADD TO CART</button>
                </div>
            </div>
        </div>
        <section class="features">
            <h2>Features</h2>
            <ul>
                <li>${features[0]}</li>
                <li>${features[1]}</li>
                <li>${features[2]}</li>
                <li>${features[3]}</li>
                <li>${features[4]}</li>
                <li>${features[5]}</li>
            </ul>
        </section>
        <section class="recommended">
            <h2 class="re-title">RECOMMENDED FOR YOU</h2>
            <div class="re-products-wrap">
                <div class="re-product">
                    <div class="re-product-img"><img src="${
        							recommended[0].thumbnail
        						}" alt="${recommended[0].name}"></div>
                    <h2 class="re-product-name">${recommended[0].name}</h2>
                    <p class="re-price">${recommended[0].price}</p>
                    <a href="${
        							recommended[0].href
        						}" class="see-product add-to-cart">SEE PRODUCT</a>
                </div>
                <div class="re-product">
                    <div class="re-product-img"><img src="${
        							recommended[1].thumbnail
        						}" alt="${recommended[1].name}"></div>
                    <h2 class="re-product-name">${recommended[1].name}</h2>
                    <p class="re-price">${recommended[1].price}</p>
                    <a href="${
        							recommended[1].href
        						}" class="see-product add-to-cart">SEE PRODUCT</a>
                </div>
                <div class="re-product">
                    <div class="re-product-img"><img src="${
        							recommended[2].thumbnail
        						}" alt="${recommended[2].name}"></div>
                    <h2 class="re-product-name">${recommended[2].name}</h2>
                    <p class="re-price">${recommended[2].price}</p>
                    <a href="${
        							recommended[2].href
        						}" class="see-product add-to-cart">SEE PRODUCT</a>
                </div>
            </div>
        </section>`
        };
	});
}

renderAmp();

// ------------- Sythesizers --------------------

function renderSynth() {
    synthesizers.forEach((x) => {
        let {
            id,
			name,
			price,
			about1,
			about2,
			features,
			thumbnail,
			gallery,
			recommended,
		} = x;

        if (document.getElementById(`${id}`)) {
        document.getElementById(`${id}`).innerHTML = `<div class="product">
        <div class="pswp-gallery" id="gallery--ampro2">
            <a href="${gallery[0].img}" 
            data-pswp-width="${gallery[0].width}" 
            data-pswp-height="${gallery[0].height}" 
            target="_blank">
                <div class="product-img smaller-box">
                    <img class="product-img-synth" src="${thumbnail}" alt="${name}">
                </div>
            </a>
            <a href="${gallery[1].img}" 
            data-pswp-width="${gallery[1].width}" 
            data-pswp-height="${gallery[1].height}" 
            target="_blank"></a>
            <a href="${gallery[2].img}" 
            data-pswp-width="${gallery[2].width}"  
            data-pswp-height="${gallery[2].height}" 
            target="_blank"></a>
        </div>
        <div class="product-info">
            <h1>${name.toUpperCase()}</h1>
            <p class="about-product">
                ${about1}
                <br>
                <br>
                ${about2}
            </p>
            <p class="price">${price}</p>
            <div class="add-amount">
                <input type="number" min="1" class="amount" value="1">
                <button class="add-to-cart" onclick="addToCart(${id})">ADD TO CART</button>
            </div>
        </div>
        </div>
        <section class="features">
        <h2>Features</h2>
        <ul>
            <li>${features[0]}</li>
            <li>${features[1]}</li>
            <li>${features[2]}</li>
            <li>${features[3]}</li>
            <li>${features[4]}</li>
            <li>${features[5]}</li>
        </ul>
        </section>
        <section class="recommended">
        <h2 class="re-title">RECOMMENDED FOR YOU</h2>
        <div class="re-products-wrap">
            <div class="re-product">
                <div class="re-product-img"><img class="re-product-img-synth" src="${recommended[0].thumbnail}" alt="${recommended[0].name}"></div>
                <h2 class="re-product-name">${recommended[0].name}</h2>
                <p class="re-price">${recommended[0].price}</p>
                <a href="${recommended[0].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
            <div class="re-product">
                <div class="re-product-img"><img class="re-product-img-synth" src="${recommended[1].thumbnail}" alt="${recommended[1].name}"></div>
                <h2 class="re-product-name">${recommended[1].name}</h2>
                <p class="re-price">${recommended[1].price}</p>
                <a href="${recommended[1].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
            <div class="re-product">
                <div class="re-product-img"><img class="re-product-img-synth" src="${recommended[2].thumbnail}" alt="${recommended[2].name}"></div>
                <h2 class="re-product-name">${recommended[2].name}</h2>
                <p class="re-price">${recommended[2].price}</p>
                <a href="${recommended[2].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
        </div>
        </section>`
        }
    })
}

renderSynth();

// ------------- Guitars --------------------

function renderGuitar() {
    guitars.forEach((x) => {
        let {
            id,
			name,
			price,
			about1,
			about2,
			features,
			thumbnail,
			gallery,
			recommended,
		} = x;

        if (document.getElementById(`${id}`)) {
        document.getElementById(`${id}`).innerHTML = `<div class="product">
        <div class="pswp-gallery" id="gallery--ampro2">
            <a href="${gallery[0].img}" 
            data-pswp-width="${gallery[0].width}" 
            data-pswp-height="${gallery[0].height}" 
            target="_blank">
                <div class="product-img">
                    <img src="${thumbnail}" alt="${name}">
                </div>
            </a>
            <a href="${gallery[1].img}" 
            data-pswp-width="${gallery[1].width}" 
            data-pswp-height="${gallery[1].height}" 
            target="_blank"></a>
            <a href="${gallery[2].img}" 
            data-pswp-width="${gallery[2].width}"  
            data-pswp-height="${gallery[2].height}" 
            target="_blank"></a>
        </div>
        <div class="product-info">
            <h1>${name.toUpperCase()}</h1>
            <p class="about-product">
                ${about1}
                <br>
                <br>
                ${about2}
            </p>
            <p class="price">${price}</p>
            <div class="add-amount">
                <input type="number" min="1" class="amount" value="1">
                <button class="add-to-cart" onclick="addToCart(${id})">ADD TO CART</button>
                </div>
        </div>
        </div>
        <section class="features">
        <h2>Features</h2>
        <ul>
            <li>${features[0]}</li>
            <li>${features[1]}</li>
            <li>${features[2]}</li>
            <li>${features[3]}</li>
            <li>${features[4]}</li>
            <li>${features[5]}</li>
        </ul>
        </section>
        <section class="recommended">
        <h2 class="re-title">RECOMMENDED FOR YOU</h2>
        <div class="re-products-wrap">
            <div class="re-product">
                <div class="re-product-img"><img src="${recommended[0].thumbnail}" alt="${recommended[0].name}"></div>
                <h2 class="re-product-name">${recommended[0].name}</h2>
                <p class="re-price">${recommended[0].price}</p>
                <a href="${recommended[0].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
            <div class="re-product">
                <div class="re-product-img"><img src="${recommended[1].thumbnail}" alt="${recommended[1].name}"></div>
                <h2 class="re-product-name">${recommended[1].name}</h2>
                <p class="re-price">${recommended[1].price}</p>
                <a href="${recommended[1].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
            <div class="re-product">
                <div class="re-product-img"><img src="${recommended[2].thumbnail}" alt="${recommended[2].name}"></div>
                <h2 class="re-product-name">${recommended[2].name}</h2>
                <p class="re-price">${recommended[2].price}</p>
                <a href="${recommended[2].href}" class="see-product add-to-cart">SEE PRODUCT</a>
            </div>
        </div>
        </section>`
        }
    })
}

renderGuitar();

// text over image

if (document.querySelector('.product-img')) {
    document.querySelector('.product-img').addEventListener('mouseenter', () => {
        const overlay = document.createElement('div');
        overlay.id = 'overlay-text';
        overlay.innerHTML = '<p>Click to view more pictures</p>'
        document.querySelector('.product-img').appendChild(overlay);
        document.querySelector('.product-img').addEventListener('mouseleave', () => {
            overlay.remove();
        })
    })
} 

// PhotoSwipeLightbox

// import PhotoSwipeLightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
// const lightbox = new PhotoSwipeLightbox({
//   gallery: '#gallery--ampro2',
//   children: 'a',
//   showHideAnimationType: "fade",
//   zoomAnimationDuration: false,
//   pswpModule: () => import('./node_modules/photoswipe/dist/photoswipe.esm.js')
// });
// lightbox.init();

// import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
// import PhotoSwipe from '/photoswipe/photoswipe.esm.js';

// const lightbox = new PhotoSwipeLightbox({
//   gallery: '#gallery--ampro2',
//   children: 'a',
//   showHideAnimationType: "fade",
//   zoomAnimationDuration: false,
//   pswpModule: PhotoSwipe
// });

// lightbox.init();
