window.addEventListener('DOMContentLoaded' , () => {
    document.addEventListener('mousemove ' , ( e ) => {
        e.preventDefault() ;
    },
    isPassive() ? {
        capture: false,
        passive: false,
    }:
        false
    );

    function isPassive () {
        let supportPasiiveOption = false;

        try {
            addEventListener (
                "test" ,
                null ,
                Object, defineProperty({} , "passive" , {
                    get: function () {
                        supportPasiiveOption = true
                    }
                })
            )
        } catch ( e ) {}
        return supportPasiiveOption ;
    }


    // // Canvas 백그라운드 -> 코드를 이해하고 작성할 수 있게 되면 사용하기
    const waveEft = function (e ) {
        let canvas = document.querySelector('#canvas') ;
        let ctx = canvas.getContext('2d') ;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let canvasHei ;
        let canvasWid ;
        let bgColor = '#ff6138' ;
        let animation = [] ;
        let circles = [];
        let randomTotal = [ Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255) ];

        let colorPicker = (function () {
            let randomRGB = `rgb ( ${new Array(3).fill().map( e => Math.random() * 255).join(",")} )`
            let idx = 0;

            function next () {
                idx = idx ++ < colors.length - 1 ? idx : 0;
                console.log(randomRGB) ;
                return colors[idx] ;
            }
            function current () {
                return colors[idx] ;
            }
            return {
                next: next,
                current: current
            }

        })() ;
        function removeAnimation ( x , y ) {
            let idx = animation.indexOf(animation) ;
            if ( idx > -1 ) {
                animation.splice( idx , 1 )
            }
        }
    }

    document.querySelector('#canvas').addEventListener('click' , waveEft);


    // 풀페이지 전환 버튼
    function transScreen (  ) {
        let changeBtn = document.querySelector('.screenChange') ;
        let body = document.querySelector('body') ;
        if ( changeBtn ) {
            changeBtn.addEventListener('click' , async e => {
                body.classList.add('curtain')
                await new Promise(resolve => setTimeout(resolve, 1000));
                body.classList.remove('curtain') ;
                body.classList.toggle('fullPage') ;

                // if ( body.classList.contains('fullPage')) {
                //     body.classList.toggle('a')
                // }
            })
        }
        else {
            throw console.log(`Not ${changeBtn}`)
        }
    }

    document.querySelector('.screenChange').addEventListener('click' , transScreen())


    // // 풀페이지
    const contentLeng = Array.from(document.querySelectorAll('.fullContainer > .content'));
    contentLeng.forEach((el , index ) => {
        let dot = document.createElement('div') ;
        let scroll = window.scrollY ;
        dot.className = `dot` ;
        if ( document.querySelector('.dotCont') ) {
            document.querySelector('.dotCont').appendChild(dot);

        }
        else {
            throw `${document.querySelector('.dotCont')} Not Find`
        }
    });


    // SVG Profile Hover Animation
    let bbPath = document.querySelector('.profile path') ;
    function bloobOver () {
        bbPath.classList.add('scale')
    } ;

    function bloobLeave () {
        bbPath.classList.remove('scale')
    } ;

    document.querySelector('.profile path').addEventListener('mouseover' , bloobOver ) ;
    document.querySelector('.profile path').addEventListener('mouseleave' , bloobLeave ) ;




    // section2 스킬 프로그레스 파트
    // section 뷰 height
    !(function () {
        let sections = Array.from(document.querySelectorAll('section'));
        let skList = Array.from(document.querySelectorAll('.section2 .right li'));
        let leftSkList = Array.from(document.querySelectorAll('.left .progsList li')) ;
        let excepSection = document.querySelector('.section2');

        // section1 nextbtn 클릭 시 section2 Top이 뷰포트 헤드로 가게
        const nxtBtn = document.querySelector('#down-arrow') ;

        nxtBtn.addEventListener('click' , e => {
            window.scrollTo({behavior:'smooth' , top:excepSection.offsetTop })
        })


        skList.forEach(e => {
            e.style.height = window.innerHeight + 'px';
        });

        sections.filter(section => section !== excepSection).forEach(e => {
            e.style.height = window.innerHeight + 'px';
        });

        window.addEventListener('resize', () => {
            sections.filter(section => section !== excepSection).forEach(e => {
                e.style.height = window.innerHeight + 'px';
            });
        });

        const skArray = Array.from(document.querySelectorAll('.skillPart .right li'));
        let currentLiIndex = 0;
        let isScrolling = false;

        skArray[currentLiIndex].classList.add('current');
        leftSkList[currentLiIndex].classList.add('current');

        function moveToLi(index) {
            if (index >= 0 && index < skArray.length) {
                // right li에 대한 클래스 제거 및 추가
                skArray[currentLiIndex].classList.remove('current');
                skArray[index].classList.add('current');

                // left li에 대한 클래스 제거 및 추가
                leftSkList[currentLiIndex].classList.remove('current');
                leftSkList[index].classList.add('current');  // index를 사용하도록 수정

                const targetTop = skArray[index].getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({ top: targetTop, behavior: 'smooth' });
                currentLiIndex = index;
            }
        }

        window.addEventListener('wheel', function (e) {
            if (isScrolling) return;

            const section2 = document.querySelector('.section2');
            const section2Rect = section2.getBoundingClientRect();

            if (section2Rect.top <= 0 && section2Rect.bottom >= window.innerHeight) {
                isScrolling = true;

                if (e.deltaY > 0 && currentLiIndex < skArray.length - 1) {
                    moveToLi(currentLiIndex + 1);
                } else if (e.deltaY < 0 && currentLiIndex > 0) {
                    moveToLi(currentLiIndex - 1);
                }

                e.preventDefault();

                setTimeout(() => {
                    isScrolling = false;
                }, 500);
            }
        }, { passive: false });
    })();


    // LastPage 전환 효과
    const triggerPage = document.querySelector('.container');
    const last = document.querySelectorAll('.lastPage');

    // 컨테이너 끝에 더미 요소 추가
    const dummy = document.createElement('div');
    dummy.style.height = '1px';
    triggerPage.appendChild(dummy);

    const callback = (entries, observer) => {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
                triggerPage.classList.add('pageEnd');
                last.forEach(el => el.classList.add('trasEft'));
                await new Promise (resolve => setTimeout(resolve , 2800));
            } else {
                triggerPage.classList.remove('pageEnd');
            }
        });
    };

    const observer = new IntersectionObserver(callback, { threshold: 1.0 });

    // 더미 요소 관찰
    observer.observe(dummy);

    // lastPage에 대한 별도의 observer
    const lastPageCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                last.forEach(el => el.classList.remove('trasEft'));
            }
        });
    };

    const lastPageObserver = new IntersectionObserver(lastPageCallback, { threshold: 0 });

    last.forEach(el => lastPageObserver.observe(el));


    // 마우스 클릭 드래그 ( 네이버 웨일 프로그램 기능 )
    !(function () {
        let isMouseDown = false;
        let startX,startY ;
        let pathColor = `#333333` ;


        document.body.addEventListener('mousedown' , e => {
            isMouseDown = true;
            startX = e.clientX;
            startY = e.clientY;
        }) ;

        document.body.addEventListener('mousemove' , e => {
            if ( isMouseDown ) {

            }
        }) ;

        document.body.addEventListener('mouseup' , e => {
            if ( isMouseDown ) {
                const endX = e.clientX ;
                const endY = e.clientY ;

                const directionX = endX - startX ;
                const directionY = endY - startY ;

                if ( Math.abs(directionY) > Math.abs(directionX) ) {
                    if ( directionY > 0 ) {

                    }
                }
                else {
                    if  ( directionX > 0 ) {

                    }
                }
                isMouseDown = false;
            }
        })
    })() ;


})

    // let section2 = document.querySelector('.section2');
    // let section2Height = section2.getBoundingClientRect().height;


// const io = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         console.log(entries) ;
//         // 관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
//         if (entry.intersectionRatio > 0) {
//             entry.target.classList.add('tada');
//         }
//         // 그 외의 경우 'tada' 클래스 제거
//         else {
//             entry.target.classList.remove('tada');
//         }
//     })
// }, { rootMargin: '0px' , threshold: 0.0 }) ;
// io.observe(section2)

    // let observer = new IntersectionObserver(function(entries) {
    //     if(entries[0].isIntersecting) {
    //         section2.style.position = 'fixed';
    //     }
    //     else {
    //         section2.style.position = 'relative';
    //     }
    // }, { rootMargin: `-${section2Height}px 0px 0px 0px`, threshold: 1.0 });


// sclBall 안에 모든 걸 넣어놓고 관리 -> 사실 이게 괜찮아 보이기는 함 일단 메모
// window.addEventListener('DOMContentLoaded' , () => {
//     function sclBall (e) {
//         window.scrollTo ({
//             behavior: "smooth"
//         }) ;
//         let scrollRecog = e.deltaY ;
//         let sclY = window.scrollY || document.documentElement.scrollTop

//         const asd = "공통 변수"; // 공통으로 사용할 변수

//         const scrollDown = function scrollDown(e, sharedVar) {
//             console.log(sharedVar);
//         }
//         const scrollUp = function scrollUp(e, sharedVar) {
//             console.log(sharedVar);
//         }

//         if ( scrollRecog > 0 ) {
//             scrollDown(e, asd)
//         }
//         else {
//             scrollUp(e, asd)
//         }
//     } ;

//     document.addEventListener('wheel' , sclBall)
// })
