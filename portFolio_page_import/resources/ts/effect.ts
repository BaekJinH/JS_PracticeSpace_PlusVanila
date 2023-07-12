import anime, { AnimeInstance, AnimeTimelineInstance } from 'animejs';

// 'setTimeout' 함수를 Promise 형태로 만들어 사용합니다.
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener('DOMContentLoaded', (event: Event) => {
    // 햄버거
    const hambMenu = document.querySelector<HTMLElement>('.hambuger');
    const blackPage = document.querySelector<HTMLElement>('.blackPage');
    const sdTxt = Array.from(document.querySelectorAll<HTMLElement>('.blackPager li'));
    let animating = false;

    if (!hambMenu || !blackPage || !sdTxt.length) {
        return;
    }

    const screenClose: AnimeInstance | AnimeTimelineInstance = anime({
        targets: blackPage,
        autoplay: false,
        left: ['100%', '0%'],
        easing: 'easeOutBounce',
        duration: 1500,
        elasticity: 0,
        complete: function() {
            animating = false;
        }
    });

    const screenOpen: AnimeInstance | AnimeTimelineInstance = anime({
        targets: blackPage,
        autoplay: false,
        left: ['0%', '100%'],
        easing: 'easeInOutBack',
        duration: 1000,
        begin: function() {
            animating = true;
        },
        complete: function() {
            animating = false;
        }
    });
    console.log(anime)

    const bpOn = () => {
        blackPage.classList.remove('bpReturn');
        blackPage.classList.add('bpOn');
    }

    const bpOff = () => {
        blackPage.classList.remove('bpOn');
        blackPage.classList.add('bpReturn');
    }

    blackPage.style.left = '100%';
    hambMenu.addEventListener('click', async (e: MouseEvent) => {
        if (animating) return;

        animating = true;
        hambMenu.classList.toggle('act_hamb');

        if (hambMenu.classList.contains('act_hamb')) {
            hambMenu.classList.remove('default', 'return');
            bpOn();

            if (screenClose.paused) screenClose.play();
            screenClose.restart();

            await delay(1600);

            document.documentElement.style.overflow = 'hidden';

            for (const [index, element] of sdTxt.entries()) {
                await delay(index * 100);

                element.classList.remove('slidePass');
                element.classList.add('slideText');

                anime({
                    targets: element,
                    duration: 1000,
                    autoplay: true,
                    easing: 'easeInOutBack',
                    translateX: ['-100%', '0%'],
                    begin: function () {
                        animating = true;
                    },
                    complete: function () {
                        animating = false;
                    }
                });
            }
        } else {
            hambMenu.classList.add('return');
            bpOff();

            await delay(500);

            for (const [index, element] of sdTxt.entries()) {
                await delay(index * 100);

                element.classList.remove('slideText');
                element.classList.add('slidePass');

                anime({
                    targets: element,
                    duration: 500,
                    autoplay: true,
                    easing: 'easeInOutBack',
                    elasticity: 100,
                    translateX: ['0%', '100%'],
                });
            }

            await delay(300);

            if (screenOpen.paused) screenOpen.play();
            screenOpen.restart();

            await delay(1000);

            document.documentElement.style.overflow = 'auto';
        }
    });
});
