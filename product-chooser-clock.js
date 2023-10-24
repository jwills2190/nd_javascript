
const prices = ["$49.50", "$79.88", "$67.25", "$110", '$12.99', '$123.66', '$56.50', '$33.23', '$99.22', '$69.59'];

let productPhoto = document.getElementById('product-photo');
let priceSpan = document.querySelector('.price');
// use querySelectorAll() to get ALL the buttons
// The result is an array of DOM elements.
const btnsArr = document.querySelectorAll('.color-swatches button');

// loop btnsArr, assigning click event listener to each btn; in this way we make each btn call the function.
for(let i = 0; i < btnsArr.length; i++) {
    // btnsArr[i].addEventListener('click', changeColor);
    btnsArr[i].addEventListener('mouseover', changeColor);
}

function changeColor() {
    productPhoto.src = "img/wall-clock-" + this.id + ".jpg";
    let i = Math.floor(Math.random() * prices.length); // 0, 1, 2, or 3
    priceSpan.textContent = prices[i];
}