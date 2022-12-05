const img = document.getElementsByClassName('bg')[0]
const imgSrc = img.getAttribute('src').toString();
img.removeAttribute('src');
img.setAttribute('style', `background-image: url(${imgSrc});`)