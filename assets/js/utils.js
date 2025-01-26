document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.swiper');

    sliders.forEach((slider) => {
        // Detectar si es el slider-home
        const isHomeSlider = slider.closest('.slider-home') !== null;

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
                dynamicBullets: true,
            },
            // breakpoints: breakpoints,
            breakpoints: slider.dataset.breakpoints ? JSON.parse(slider.dataset.breakpoints) : {},
        };

        // Agregar autoplay si está configurado
        if (autoplayConfig) {
            config.autoplay = autoplayConfig;
        }
        
        // Configuración especial para el slider home
        if (isHomeSlider) {
            Object.assign(config, {
                centeredSlides: true,
                slidesPerView: 1.2, // Ajustar el valor según lo necesario
                spaceBetween: 20, // Espacio entre los slides
                loop: true,
                breakpoints: {
                    640: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 1.2 }, // Dejar parcialmente visibles los laterales
                },
                navigation: {
                    nextEl: slider.closest('.position-relative').querySelector('.swiper-button-next'),
                    prevEl: slider.closest('.position-relative').querySelector('.swiper-button-prev'),
                },
            });
        } else if (slider.dataset.hasNavigation === 'true') {
            // Agregar navegación para los sliders normales
            config.navigation = {
                nextEl: slider.closest('.position-relative').querySelector('.swiper-button-next'),
                prevEl: slider.closest('.position-relative').querySelector('.swiper-button-prev'),
            };
        }

        // Inicializar Swiper
        new Swiper(slider, config);
    });
});
