

// PhotoSwipeLightbox

import PhotoSwipeLightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--ampro2',
  children: 'a',
  showHideAnimationType: 'fade',
  zoomAnimationDuration: false,
  pswpModule: () => import('./node_modules/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();

// -------------- Products objects ----------------------

// Sythesizers

const synthesizers = [
    {
        name: "Vox AC4",
        price: "€ 440,00",
        about1: "Famous for its ability to achieve classic VOX tone at low volume levels, the AC4 is one of the most popular amps in VOX's lineup.",
        about2: "An ideal choice for the home or the studio, the AC4 Custom serves up an array of authentic VOX tone through a Celestion 12” speaker and can even be paired with external speaker cabinet for more tonal diversity. This iconic low-wattage amp was first introduced by VOX in 1961 and is still the choice of many modern guitarists who are drawn to its mesmerizing tone and classic aesthetic.",
        features: ["Speaker: 1 x 12″ Celestion VX12 Custom", "Output Power: 4 Watts RMS 16 Ohms", "1 x Normal Input Jack", "1 x External Speaker Jack", "Volume, Gain, Bass, Treble", "2 x 12AX7 (preamp) 1 x EL84 (power amp)"],
        thumbnail: "./assets/vox/thumbnail.png",
        gallery: [
            {
                img: "./assets/vox/front.jpg",
                width: "2600",
                height: "2929"
            },
            {
                img: "./assets/vox/top.jpg",
                width: "3072",
                height: "1599"
            },
            {
                img: "./assets/vox/back.jpg",
                width: "2562",
                height: "2895"
            },
        ],
        recommended: [
            {
                name: "Blackstar ID:CORE V3",
                thumbnail: "./assets/blackstar/thumbnail.png",
                price: "€ 219,00",
                href: "./fender65.html"
            },
            {
                name: "Marshall SC20C",
                thumbnail: "./assets/marshall/thumbnail.png",
                price: "€ 819,00",
                href: "./marshall.html"
            },
            {
                name: "Fender '65 Deluxe",
                thumbnail: "./assets/fender/thumbnail.png",
                price: "€ 1.850,00",
                href: "./fender65.html"
            }
        ],

    },
]

const renderSynth = () => {
    
    
    document.getElementById('render-synth').innerHTML = synthesizers.map((x) => {
        
        let {name, price, about1, about2, features, thumbnail, gallery, recommended} = x;
        
        return `<div class="product">
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
    });
}

renderSynth();


