const headerBurgerOpen = document.querySelector(".header__burger");
const asideBurgerClose = document.querySelector(".aside-menu__burger");
const fogOfWar = document.querySelector(".fog-of-war");
const asideLeft = document.querySelector(".aside-left");
const readMore = document.querySelectorAll(".read-more");
const readMoreBrands = document.querySelector(".brands__read-more");
const companies = document.querySelector(".companies");


headerBurgerOpen.addEventListener('click', () => {
    asideLeft.classList.add('aside-left__visible');
    fogOfWar.classList.add('fog-of-war__visible');
})

asideBurgerClose.addEventListener('click', () => {
    asideLeft.classList.remove('aside-left__visible');
    fogOfWar.classList.remove('fog-of-war__visible');
})

readMore.forEach((btn) => {
    const span = btn.querySelector("span");
    // const readMoreOpen = elem.querySelector("span");

    btn.addEventListener('click', () => {
        const isOpened = btn.classList.contains("read-more__open");
        if (!isOpened) {
            // показать
            span.textContent = 'Скрыть';
            btn.classList.add('read-more__open');
        } else {
            // скрыть
            span.textContent = 'Читать далее';
            btn.classList.remove('read-more__open');
        }
    })
})


readMoreBrands.addEventListener('click', () => {
    const isOpenedCompanies = companies.classList.contains("companies__open");

    if (isOpenedCompanies) {
        companies.classList.remove('companies__open');
    } else {
        companies.classList.add('companies__open');
    }

})



//swiper

/*    const swiper = new Swiper('.swiper', {
        //speed: 1000,
               loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    enabled: true,
                },
                320: {
                    slidesPerView: 1.1,
                    enabled: true,
                },
                350: {
                    slidesPerView: 1.3,
                    enabled: true,
                },
                390: {
                    slidesPerView: 1.5,
                    enabled: true,
                },
                540: {
                    slidesPerView: 2,
                    enabled: true,
                },
            },
    });*/

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        console.log(swiper);
            if (callback) {
                callback(swiper);
            }
        }

        const checker = function() {
            if (breakpoint.matches) {
                console.log('matches');
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                console.log('not matches');
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(max-width: 768px)',
        '.swiper',
        {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    enabled: true,
                },
                320: {
                    slidesPerView: 1.1,
                    enabled: true,
                },
                350: {
                    slidesPerView: 1.3,
                    enabled: true,
                },
                390: {
                    slidesPerView: 1.5,
                    enabled: true,
                },
                540: {
                    slidesPerView: 2,
                    enabled: true,
                },
                620: {
                    slidesPerView: 2.2,
                    enabled: true,
                },
            },
        },
        someFunc
    );


});