if (document.querySelector('.swiper-container')){
    new Swiper(".image-slider", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            
            loop: true,
        },
        simulateTouch: false,
        touchRatio: 2,
        slidesPerView: 1,
        autoHeight: window.innerWidth <= 1050,

        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 2000,


        
    });

    if (window.innerWidth < 812) {
                swiper.on('touchStart', function () {
                    swiper.params.speed = 300; // Увеличиваем скорость при ручном скролле
                });

                swiper.on('touchEnd', function () {
                    swiper.params.speed = 1000; // Возвращаем скорость к автоскроллу
                });
            }

}


