let openIcon = document.querySelector('.open');
let closeIcon = document.querySelector('.close');
let navbar = document.querySelector('.navbar');

openIcon.addEventListener('click', function(){
    navbar.classList.add('active')
})

closeIcon.addEventListener('click', function(){
    navbar.classList.remove('active')
})
