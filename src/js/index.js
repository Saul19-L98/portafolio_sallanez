'use strict';

//Scrolling
const menu = document.querySelector('.menu');

menu.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('menu_link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});

// Sticky navigation: Intersection Observer API
const about = document.querySelector('.about')
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navHeight = navbar.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(main);

///////////////////////////////////////////////////////////////////////////
//NOTE: Another form.
// window.addEventListener("scroll",function(){
//     navbar.classList.toggle("sticky", window.scrollY > 0);
// });
///////////////////////////////////////////////////////////////////////////

//Reveal section
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// const revealSection = function (entries, observer) {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0.20,
// });

// allSections.forEach(function (section) {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden');
// });


