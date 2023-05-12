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

let galleryEl = document.querySelector('.gallery');

let imageList = images.map(image => {
  return `<li class ='list-item'><img src = ${image.url} alt= ${image.alt} width = 400px </li>`

})


galleryEl.insertAdjacentHTML('beforeend', imageList)

galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none'
galleryEl.style.gap = '10px'
galleryEl.style.justifyContent = 'center'









// let galleryEl = document.querySelector('gallery');

// function createElement ({url, alt}) {
//   let element = document.createElement("img");

//   if (url) {
//     element.url;
//   }
//   if (alt) {
//     element.alt;
//   }
//   return element;
// }

// let mainEl = createElement(images);

// galleryEl.append(mainEl)



