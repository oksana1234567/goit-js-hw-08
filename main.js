  
import gallerysObj from './data/gallery-items.js';
console.log(gallerysObj);

const galleryContainer = document.querySelector('.js-gallery');
const modalContainer = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const modalClosingRef = document.querySelector('[data-action="close-lightbox"]');
console.log(modalClosingRef);

// ______________создание Галереи

const cardsMarkup = createGalleryMarkup(gallerysObj);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);



function createGalleryMarkup(gallerysObject) {
  return gallerysObj.map(({ preview, original, description}) => {
      return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
};





// const createGalleryMarkup = function(item) {
  
//       const liElement = document.createElement('li');
//       liElement.classList.add('gallery__item');

//       const aElement = document.createElement('a');
//       aElement.classList.add('gallery__link');
//       aElement.setAttribute('href', `${item.original}`);

//       const imgElement = document.createElement('img');
//       imgElement.classList.add('allery__image');
//       imgElement.setAttribute('src', `${item.preview}`);
//         imgElement.dataset.source = item.original;
//       imgElement.setAttribute('alt', `${item.description}`);
      
//       liElement.append(aElement, imgElement);
    
//       return liElement;
// };
      
// const createCards = gallerysObj.map(createGalleryMarkup);
// galleryContainer.append(...createCards);

// ______________прослушивание клика и модалка
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  const isImageEl = event.target.classList.contains('gallery__image');

    if (!isImageEl) {
        return;
    }
    event.preventDefault();
    

    modalContainer.classList.add('is-open');
    
modalImage.src = event.target.dataset.source;
modalImage.alt = event.target.alt;

  window.addEventListener("keydown", onEscKeyPress);
    
};

// ______________закрытие модалки
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

modalClosingRef.addEventListener('click', onModalClosingClick);
function onModalClosingClick() {
    modalContainer.classList.remove('is-open');
modalImage.src = '';
modalImage.alt = '';
};
// Закрытие модального окна по клику на div.lightbox__overlay

const modalBackdrop = document.querySelector('.lightbox__overlay');
modalBackdrop.addEventListener('click', onModalClosingClick);

window.removeEventListener("keydown", onEscKeyPress);

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
    
//     onModalClosingClick();
//   }
// }

// Закрытие модального окна по нажатию клавиши ESC

// window.addEventListener("keydown", onEscKeyPress);


function onEscKeyPress(event) {

  const escKeyCode = 'Escape';
  const isEscKey = event.code === escKeyCode;

  if (isEscKey) {
    onModalClosingClick();
  }
};

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
//  'ArrowLeft'
// 'ArrowRight'

// window.addEventListener("keydown", onRightLeftPress);

// function onRightLeftPress(event) {
  
//     const leftKeyCode = 'ArrowLeft';
//     const rightKeyCode = 'ArrowRight';

//     if(event.code === leftKeyCode) {
        
//     } else if(event.code === rightKeyCode) {
        
//     }


// };