

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
