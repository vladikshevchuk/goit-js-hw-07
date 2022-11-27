import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));
galleryRef.addEventListener('click', getOriginalImg);

function createGallery(galleryItems) {
    const galleryUp = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${preview}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `
    }).join('');
    
    return galleryUp;
}

function getOriginalImg(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    console.log(evt.target.dataset.source);

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    if (instance.show) {
        document.addEventListener("keydown", event => {
            event.code === 'Esc';
            return instance.close();
        });
    }
}







