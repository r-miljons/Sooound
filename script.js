

// -------------- Rendering indivudial products per category ----------------------

import { amplifiers, synthesizers, guitars } from "./products.js";

// Amplifiers

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
                    <input type="text" class="amount" value="1">
                    <a href="#" class="add-to-cart">ADD TO CART</a>
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
                <input type="text" class="amount" value="1">
                <a href="#" class="add-to-cart">ADD TO CART</a>
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
                <input type="text" class="amount" value="1">
                <a href="#" class="add-to-cart">ADD TO CART</a>
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

document.querySelector('.product-img').addEventListener('mouseenter', () => {
    const overlay = document.createElement('div');
    overlay.id = 'overlay-text';
    overlay.innerHTML = '<p>Click to view more pictures</p>'
    document.querySelector('.product-img').appendChild(overlay);
    document.querySelector('.product-img').addEventListener('mouseleave', () => {
        overlay.remove();
    })
})

// PhotoSwipeLightbox

import PhotoSwipeLightbox from "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js";

const lightbox = new PhotoSwipeLightbox({
	gallery: "#gallery--ampro2",
	children: "a",
	showHideAnimationType: "fade",
	zoomAnimationDuration: false,
	pswpModule: () => import("./node_modules/photoswipe/dist/photoswipe.esm.js"),
});

lightbox.init();