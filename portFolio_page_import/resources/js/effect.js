document.addEventListener('DOMContentLoaded' , () => {
    // 햄버거
    let hambMenu = document.querySelector('.hambuger');
    let bloom = document.querySelector('.bloomList') ;
    let bloomSide = document.querySelector('.bloomSide');
    let blackPage = document.querySelector('.blackPager');
    let animating = false;
    let sdTxt = Array.from(document.querySelectorAll('.blackPager > ul li'));
    let trig = document.querySelector('.menuTrig');
    let opMenu = document.querySelector('.subMenu') ;

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
        easing: 'easeInQuart',
        duration: 800,
        begin: function() { // 애니메이션이 시작하면 animating을 true로 변경
            animating = true;
        },
        complete: function() { // 애니메이션이 끝나면 animating을 false로 변경
            animating = false;
        }
    });

    // 메뉴 트리거
    let btns = Array.from(document.querySelectorAll('.button'))
    if ( trig ) {
        trig.addEventListener('click' , e => {
            clearInterval(sunMoonAnimation),
            opMenu.classList.toggle('opMenu')
            if ( hambMenu.classList.contains('act_hamb') ) {
                btns.forEach( el => {
                    el.classList.add('bkTheme')
                })
                hambMenu.click() ;
            }
            if ( bloomSide.classList.contains('open') ) {
                bloomSide.classList.remove('open')
                document.querySelector('#wrapper').classList.remove('wrapOn') ;
                document.querySelector('.spinWrap').classList.remove('spinfix') ;
                bloomSide.click() ;
            }
        })
    }

    // 꽃 배경 사이드 바
    if ( bloom ) {
        bloom.addEventListener('click' , async  e => {
            clearInterval(sunMoonAnimation);
            if ( blackPage.classList.contains('bpOn') ) {
                await new Promise(resolve => {
                    hambMenu.click();
                    setTimeout(resolve, 3000); // wait for the blackPage to close
                });
            }
            bloomSide.classList.toggle('open') ;
            bloomSide.classList.contains('open') ?
            (
                document.querySelector('#wrapper').classList.add('wrapOn') ,
                document.querySelector('.spinWrap').classList.add('spinfix')
            )
            :
            (
                document.querySelector('#wrapper').classList.remove('wrapOn') ,
                document.querySelector('.spinWrap').classList.remove('spinfix')
            )

        })
    }

    let sunMoonAnimation;

    // 사이드 메뉴 개별 스크립트 이펙트
    // // 테마 색 반전
    let sunMoon = document.querySelector('#sunmoon')

    let isScrollDisabled = false;
    let preventScroll = function (e) {
        e.preventDefault();
    };


    if (hambMenu) {

        let listToImg = document.querySelector('.imgContainer');
        blackPage.style.left = `100%`;
        hambMenu.addEventListener('click', async e => {
            if ( bloomSide.classList.contains('open') ) {
                await new Promise(resolve => {
                    bloom.click();
                    setTimeout(resolve, 1600); // wait for the bloomSide to close
                });
            }
            if (isScrollDisabled) {
                // 스크롤 막기 이벤트 리스너를 제거하여 스크롤을 다시 활성화합니다.
                window.removeEventListener('wheel', preventScroll, { passive: false });
                isScrollDisabled = false;
            } else {
                // 스크롤 막기 이벤트 리스너를 추가하여 스크롤을 막습니다.
                window.addEventListener('wheel', preventScroll, { passive: false });
                isScrollDisabled = true;
            }
            if (animating) return;
            animating = true;
            hambMenu.classList.toggle('act_hamb');
            hambMenu.classList.contains('act_hamb') ?
            (
                btns.forEach( el => {
                    el.classList.add('bkTheme')
                }),
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
                })(),
                await new Promise(resolve => setTimeout(resolve, 1800)),
                listToImg.classList.add('calcWrap'),
                sunMoonAnimation = setInterval( () => { sunMoon.classList.toggle('sun') ; }, 3000)
            ) :
            (
                clearInterval(sunMoonAnimation),
                hambMenu.classList.add('return'),
                btns.forEach( el => {
                    el.classList.remove('bkTheme')
                }),
                bpOff(),
                listToImg.classList.remove('calcWrap'),
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
                    await new Promise(resolve => setTimeout(resolve, 10));
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


    // Scroll Spin Ball
    const spinCc = document.querySelector('.fixSpinCc');

    const updateClassBasedOnScroll = () => {
        const sclY = window.scrollY || document.documentElement.scrollTop;
        if (sclY > 200) {
            spinCc.classList.add('spinCc');
        } else {
            spinCc.classList.remove('spinCc');
        }
    };

    // 초기 상태 업데이트
    updateClassBasedOnScroll();

    function sclBall(e) {
        if (isScrollDisabled) {
            return;
        }
        const variabList = {
            spinCc,
            scrollRecog: e.deltaY,
            sclY: window.scrollY || document.documentElement.scrollTop,
        };

        if (variabList.scrollRecog > 0) {
            scrollDown(variabList);
        } else {
            scrollUp(variabList);
        }
    }

    const scrollDown = function scrollDown(variabList) {
        variabList.spinCc.classList.add('spinCc');
    }

    const scrollUp = function scrollUp(variabList) {
        if (variabList.sclY <= 200) {
            variabList.spinCc.classList.remove('spinCc');
        }
    }

    document.addEventListener('wheel', sclBall);



    // // Canvas 백그라운드 코드를 이해하고 작성할 수 있게 되면 사용하기
    // let canvas = document.querySelector('canvas') ;
    // let ctx = canvas.getContext('2d') ;
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // let canvasHei ;
    // let canvasWid ;
    // let bgColor = '#ff6138' ;
    // let animation = [] ;
    // let circles = [];




    // //  서브 서클
    // let circle = document.querySelector('.subCircle')
    // if ( circle ) {
    //     circle.addEventListener('click' , (e) => {

    //     })
    // }


    // // 스크롤
    // window.addEventListener('scroll' , function (e) {
    //     let currTop = window.scrollY ;
    //     // console.log(currTop)
    //     // if ( currTop >= otherTop ) {

    //     // }
    // })


    // // 풀페이지 전환 버튼
    // let changeBtn = document.querySelector('.screenChange') ;
    // let body = document.querySelector('body') ;
    // changeBtn.addEventListener('click' , e => {
    //     body.classList.add('curtain')
    //     setTimeout(() => {
    //         body.classList.remove('curtain') ;
    //         body.classList.toggle('fullPage') ;

    //         // if ( body.classList.contains('fullPage')) {
    //         //     body.classList.toggle('a')
    //         // }
    //     } , 1000)
    // })


    // // function fullPage () {

    // // }
    // // function content () {

    // // }

    // // switch (a , b) {
    // //     case 1 :
    // //     break
    // //     case 2 :
    // //     break
    // //     default :
    // // }


    // // 마우스 휠 이벤트
    // window.addEventListener('mousewheel' , e => {
    //     if (e.deltaY > 0) {
    //         let scroll = window.innerHeight;
    //         window.scrollTo({
    //             // top: scroll,
    //             behavior: "smooth" ,
    //         });
    //         console.log(scroll);
    //     }
    //     else {

    //     }
    // })


    // // 풀페이지
    // const contentLeng = Array.from(document.querySelectorAll('.fullContainer > .content'));
    // contentLeng.forEach(el => {
    //     let dot = document.createElement('div') ;
    //     let scroll = window.scrollY ;
    //     dot.className = 'dot' ;
    //     document.querySelector('.dotCont').appendChild(dot);

    //     dot.addEventListener('click' , function (e) {

    //     })
    // });



    // // 테마 색 반전



})