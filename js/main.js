// init mobile menu

const mobileMenu = document.querySelectorAll('.menu-icon');
const menuList = document.querySelector('.menu__list');


mobileMenu.forEach(function(item){
    item.addEventListener('click', function(){
        menuList.classList.toggle('menu__list--mobile');
    })
})

//init slider 

let swiper = new Swiper(".company-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    // freeMode: true,
    loop: true,
  });