(() => {
    const menus = document.querySelectorAll('.header__menu-item');
    console.log(menus);

    const menus = document.querySelectorAll('.header__menu-item');
    console.log(menus);

    menus.forEach((item, i) =>{
        item.addEventListener('mouseover',() => {
            popus[i].classList.add('header__menu-pop-up--open');
        });

        item.addEventListener('mouseout',() => {
            popus[i].classList.remove('header__menu-pop-up--open');
        });
    })
})()