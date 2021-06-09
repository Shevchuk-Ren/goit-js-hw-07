  
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const fotoGaleries = document.querySelector('ul#gallery');
fotoGaleries.classList.add('gallery');

   
const makeTransactionImageListMarkUp = transaction => {  
    return `<li class="gallery__item"><img class="gallery__img" src="${transaction.url}" alt="${transaction.alt}"></img></li>`;
};
     
// console.log(makeTransactionImageListMarkUp(images));
makeTransactionImageListMarkUp(images);

const makeGaleryMarkUp = images
    .map(makeTransactionImageListMarkUp)
    .join('');

fotoGaleries.insertAdjacentHTML('beforeend', makeGaleryMarkUp);

// const fotoGaleriesItem = document.querySelector('li');
// fotoGaleriesItem.classList.add('gallery__link--bg');
// console.log(fotoGaleriesItem);
// const fotoGaleriesFirstImg = document.querySelector('img');
// fotoGaleriesFirstImg.classList.add('gallery__img--bg');
// fotoGaleriesFirstImg.width = 640;

// console.log(fotoGaleriesFirstImg);

// console.log(makeGaleryMarkUp);

