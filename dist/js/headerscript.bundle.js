"use strict"
const burger = document.querySelector('.header-burger');
const menuBody = document.querySelector('.menu-body');
if (burger){
   
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}



const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        const goto = menuLink.dataset.goto;  // Доступ к значению атрибута data-goto
        if (goto) {
            // Если текущее местоположение не является корневым
            if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
                // Перенаправление на главную страницу с якорем
                window.location.href = `${window.location.origin}/dist/html/index.html${goto}`;
            } else {
                // Если пользователь на главной странице, выполнить прокрутку
                if (document.querySelector(goto)) {
                    const gotoBlock = document.querySelector(goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;
                   
                    if (burger.classList.contains('_active')){
                            document.body.classList.remove('_lock')
                            burger.classList.remove('_active');
                            menuBody.classList.remove('_active');
                    }
                    
                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth"
                    });
                }
            }
            e.preventDefault();
        }
    }
}
