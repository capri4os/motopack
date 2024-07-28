function toggleMenu() {
    let menu = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.header__menu__icon');
    let close = document.querySelector('.mobile-menu__close');

    icon.addEventListener('click', function () {
        menu.hidden = !menu.hidden;
    });

    close.addEventListener('click', function () {
        menu.hidden = !menu.hidden;
    });
}