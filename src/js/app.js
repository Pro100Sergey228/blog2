let btnMenu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');
let dataNavbar = navbar.getAttribute('data-navbar');
btnMenu.onclick = function(){
    navbar.classList.toggle("navbar--active");
};

// подключение слайдера
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});

const btnAccordion = document.querySelectorAll('#accordion-button');
const bodyAccordion = document.querySelectorAll('#accordion-body');
for(x = 0; x < btnAccordion.length; x++){
    btnAccordion[x].onclick = function(){
        let accordionPath = this.getAttribute('data-accroidon');
        console.log(accordionPath)
        for(y = 0; y < bodyAccordion.length; y++){
            let accroidonTarget = bodyAccordion[y].getAttribute('data-accordion-target');
            if( bodyAccordion[y].getAttribute('data-accordion-target') === accordionPath){
                bodyAccordion[y].classList.toggle('accordion--active');
            }
        }

    }
}


const btnBar = document.querySelectorAll('.bar-button');
const bodyBar = document.querySelectorAll('.bar-body');
for(x = 0; x < btnBar.length; x++){
    btnBar[x].onclick = function(){
        let barPath = this.getAttribute('data-bar');
        console.log(barPath)
        for(y = 0; y < bodyBar.length; y++){
            let barTarget = bodyBar[y].getAttribute('data-bar-target');
            if( bodyBar[y].getAttribute('data-bar-target') === barPath){
                bodyBar[y].classList.toggle('bar--active');
                
            }
        }

    }
}




const toggleSwitch = document.getElementById('input-checkbox');
const currentTheme = localStorage.getItem('data-theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);


// scroll header
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("header--sticky", window.scrollY > 0);
});
Ellipsis
({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: true, //if you want the ellipsis to move with the window resizing
    className: '.clamp-1', //default class to apply the ellipsis
    lines: 1, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true //default the ellipsis can truncate words
})
Ellipsis
({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: true, //if you want the ellipsis to move with the window resizing
    className: '.clamp-2', //default class to apply the ellipsis
    lines: 2, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true //default the ellipsis can truncate words
})
Ellipsis
({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: true, //if you want the ellipsis to move with the window resizing
    className: '.clamp-3', //default class to apply the ellipsis
    lines: 3, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true //default the ellipsis can truncate words
})
Ellipsis
({
    ellipsis: '…', //default ellipsis value
    debounce: 0, //if you want to chill out your memory usage on resizing
    responsive: false, //if you want the ellipsis to move with the window resizing
    className: '.clamp-4', //default class to apply the ellipsis
    lines: 6, //default number of lines when the ellipsis will appear
    portrait: null, //default no change, put a number of lines if you want a different number of lines in portrait mode,
    break_word: true //default the ellipsis can truncate words
})
