document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.swiper');

    sliders.forEach((slider) => {
        const slidesPerView = parseInt(slider.dataset.slidesPerView, 10) || 1;
        const hasNavigation = slider.dataset.hasNavigation === 'true';
        const breakpoints = slider.dataset.breakpoints ? JSON.parse(slider.dataset.breakpoints) : {};
        const autoplayConfig = slider.dataset.autoplay ? JSON.parse(slider.dataset.autoplay) : false;

        // Configuración base
        const config = {
            slidesPerView: slidesPerView,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: slider.closest('.position-relative').querySelector('.swiper-pagination'),
                clickable: true,
            },
            breakpoints: breakpoints,
        };

        // Agregar autoplay si está configurado
        if (autoplayConfig) {
            config.autoplay = autoplayConfig;
        }
        
        // Agregar navegación si está habilitada
        if (hasNavigation) {
            config.navigation = {
                nextEl: slider.closest('.position-relative').querySelector('.swiper-button-next'),
                prevEl: slider.closest('.position-relative').querySelector('.swiper-button-prev'),
            };
        }

        // Inicializar Swiper
        new Swiper(slider, config);
    });
});
