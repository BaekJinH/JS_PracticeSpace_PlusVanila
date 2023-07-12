import anime from '../lib/plugin/anime.es';

document.addEventListener('DOMContentLoaded' , () => {
    // 햄버거
    let hambMenu = document.querySelector('.hambuger') as HTMLElement ;
    let blackPage = document.querySelector('.blackPager') as HTMLElement ;
    let animating = false;
    let sdTxt = Array.from(document.querySelectorAll('.blackPager li')) as HTMLElement[] ;

    // animeJs
    let screenClose = anime({
        targets: blackPage,
        autoplay: false,
        left: ['100%', '0%'],
        easing: 'easeOutBounce',
        duration: 1500,
        elasticity: 0,
        complete: function() {
          // 애니메이션이 끝나면 animating을 false로 변경
          animating = false;
        }
    });
    // let screenClose = anime({
    //     targets: blackPage,
    //     autoplay: false,
    //     left: ['100%', '0%'],
    //     easing: 'easeOutElastic(6, .4)',
    //     duration: 4000,
    //     complete: function() { // 애니메이션이 끝나면 animating을 false로 변경
    //         animating = false;
    //     }
    // });
    let screenOpen = anime({
        targets: blackPage,
        autoplay: false,
        left: ['0%', '100%'],
        easing: 'easeInOutBack',
        duration: 1000,
        begin: function() { // 애니메이션이 시작하면 animating을 true로 변경
            animating = true;
        },
        complete: function() { // 애니메이션이 끝나면 animating을 false로 변경
            animating = false;
        }
    });


    if (hambMenu) {
        blackPage.style.left = `100%`;
        hambMenu.addEventListener('click', async e => {
            if (animating) return;
            animating = true;
            hambMenu.classList.toggle('act_hamb');
            hambMenu.classList.contains('act_hamb') ?
            (
                hambMenu.classList.remove('default'),
                hambMenu.classList.remove('return'),
                bpOn(),
                (screenClose.paused ? screenClose.play() : null),
                screenClose.restart(),
                await new Promise(resolve => setTimeout(resolve, 1600)), // wait for 4 seconds
                document.querySelector('html').style.overflow = 'hidden',
                (async () => {
                    for (const element of sdTxt) {
                        await new Promise(resolve => setTimeout(() => {
                            element.classList.remove('slidePass');
                            element.classList.add('slideText');
                            let txtSd = anime({
                                targets: element,
                                duration: 1000,
                                autoplay: true,
                                easing: 'easeInOutBack',
                                translateX: ['-100%','0%'],
                                begin: function() {
                                    animating = true;
                                },
                                complete: function() {
                                    animating = false;
                                }
                            });
                            resolve();
                        }, sdTxt.indexOf(element) * 100));
                    }
                })()
            ) :
            (
                hambMenu.classList.add('return'),
                bpOff(),
                await new Promise(resolve => setTimeout(resolve, 500)),
                (async () => {
                    await sdTxt.reduce(async (prevPromise, e, i) => {
                        await prevPromise;
                        await new Promise(resolve => setTimeout(() => {
                            e.classList.remove('slideText');
                            e.classList.add('slidePass');
                            let txtPs = anime({
                                targets: e,
                                duration: 500,
                                autoplay: true,
                                // easing: 'easeInOutQuad',
                                easing: 'easeInOutBack',
                                elasticity: 100,
                                translateX: ['0%', '100%'],
                            });
                            resolve();
                        }, i * 100));
                    }, Promise.resolve());
                    await new Promise(resolve => setTimeout(resolve, 300));
                    (screenOpen.paused ? screenOpen.play() : null),
                    screenOpen.restart() ;
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    document.querySelector('html').style.overflow = 'auto' ;
                })()
            );
        });
    }

    // black Page
    let bpOn = function () {
        blackPage.classList.remove('bpReturn');
        blackPage.classList.add('bpOn');
    }

    let bpOff = function () {
        blackPage.classList.remove('bpOn');
        blackPage.classList.add('bpReturn');
    }

    // 햄버거 관련 효과 끝






    // Canvas 백그라운드 코드를 이해하고 작성할 수 있게 되면 사용하기
    let canvas = document.querySelector('canvas') ;
    let ctx = canvas.getContext('2d') ;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let canvasHei ;
    let canvasWid ;
    let bgColor = '#ff6138' ;
    let animation = [] ;
    let circles = [];




    //  서브 서클
    let circle = document.querySelector('.subCircle')
    if ( circle ) {
        circle.addEventListener('click' , (e) => {

        })
    }


    // 스크롤
    window.addEventListener('scroll' , function (e) {
        let currTop = window.scrollY ;
        // console.log(currTop)
        // if ( currTop >= otherTop ) {

        // }
    })


    // 풀페이지 전환 버튼
    let changeBtn = document.querySelector('.screenChange') ;
    let body = document.querySelector('body') ;
    changeBtn.addEventListener('click' , e => {
        body.classList.add('curtain')
        setTimeout(() => {
            body.classList.remove('curtain') ;
            body.classList.toggle('fullPage') ;

            // if ( body.classList.contains('fullPage')) {
            //     body.classList.toggle('a')
            // }
        } , 1000)
    })


    // function fullPage () {

    // }
    // function content () {

    // }

    // switch (a , b) {
    //     case 1 :
    //     break
    //     case 2 :
    //     break
    //     default :
    // }
    // 마우스 휠 이벤트a
    window.addEventListener('mousewheel' , e => {
        if (e.deltaY > 0) {
            let scroll = window.innerHeight;
            window.scrollTo({
                // top: scroll,
                behavior: "smooth" ,
            });
            console.log(scroll);
        }
        else {

        }
    })


    // 풀페이지
    const contentLeng = Array.from(document.querySelectorAll('.fullContainer > .content'));
    contentLeng.forEach(el => {
        let dot = document.createElement('div') ;
        let scroll = window.scrollY ;
        dot.className = 'dot' ;
        document.querySelector('.dotCont').appendChild(dot);

        dot.addEventListener('click' , function (e) {

        })
    });



    // 테마 색 반전



})