

// PhotoSwipeLightbox

import PhotoSwipeLightbox from './node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--ampro2',
  children: 'a',
  showHideAnimationType: 'none',
  zoomAnimationDuration: false,
  showAnimationDuration: 0,
  hideAnimationDuration: 0,
  pswpModule: () => import('./node_modules/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();
