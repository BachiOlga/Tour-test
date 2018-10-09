(() => {
    const menus = document.querySelectorAll('.header__menu-item');
    const popups = document.querySelectorAll('header__menu-pop-up');
    

    menus.forEach((item, i) =>{
        item.addEventListener('mouseover',() => {
            popups[i].classList.add('header__menu-pop-up--open');
        });

        item.addEventListener('mouseout',() => {
            popups[i].classList.remove('header__menu-pop-up--open');
        });
    })
})()