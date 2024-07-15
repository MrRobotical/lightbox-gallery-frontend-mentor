const mainImages = document.querySelectorAll('.default .main-img img');
const thumbnails = document.querySelectorAll('.default .thumb-list div');
const lightBoxMainImages = document.querySelectorAll('.lightbox .main-img img');
const lightbox = document.querySelector('.lightbox');
const lightBoxThumbnails = document.querySelectorAll(
  '.lightbox .thumb-list div'
);
const iconClose = document.querySelector('.icon-close');
const iconPrev = document.querySelector('.icon-prev');
const iconNext = document.querySelector('.icon-next');

let currentIndex = 0;

const changeImg = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => {
    img.classList.remove('active');
  });

  thumbnails.forEach((thumb) => {
    thumb.classList.remove('active');
  });

  mainImages[index].classList.add('active');
  thumbnails[index].classList.add('active');
  currentIndex = index;
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    changeImg(index, mainImages, thumbnails);
  });
});

lightBoxThumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    changeImg(index, lightBoxMainImages, lightBoxThumbnails);
  });
});

mainImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    changeImg(index, lightBoxMainImages, lightBoxThumbnails);
  });
});

iconPrev.addEventListener('click', () => {
  if (currentIndex <= 0) {
    changeImg(mainImages.length - 1, lightBoxMainImages, lightBoxThumbnails);
  } else {
    changeImg(currentIndex - 1, lightBoxMainImages, lightBoxThumbnails);
  }
});

iconNext.addEventListener('click', () => {
  if (currentIndex >= mainImages.length - 1) {
    changeImg(0, lightBoxMainImages, lightBoxThumbnails);
  } else {
    changeImg(currentIndex + 1, lightBoxMainImages, lightBoxThumbnails);
  }
});

iconClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
