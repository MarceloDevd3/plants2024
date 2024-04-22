
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.card-container');
next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.card')
    slider.appendChild(slides[0])
})

prev.addEventListener('click', function () {
    let slides = document.querySelectorAll('.card')
    slider.prepend(slides[slides.length - 1])
})