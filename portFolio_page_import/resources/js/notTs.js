window.addEventListener('DOMContentLoaded' , () => {



    // Scroll Spin Ball />


    // // Canvas 백그라운드 코드를 이해하고 작성할 수 있게 되면 사용하기
    const waveEft = function (e ) {
        let canvas = document.querySelector('canvas') ;
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
            let colors = `rgb( ${randomTotal[0]} , ${randomTotal[1]} , ${randomTotal[2]} )`  ;
            let idx = 0;

            function next () {
                idx = idx ++ < colors.length - 1 ? idx : 0;
                return colors[idx] ;
            }
            function current () {
                return colors[idx]
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

    document.querySelector('canvas').addEventListener('click' , waveEft);



    // //  서브 서클
    let circle = document.querySelector('.subCircle')
    if ( circle ) {
        circle.addEventListener('click' , (e) => {

        })
    }


    // // 스크롤
    window.addEventListener('scroll' , function (e) {
        let currTop = window.scrollY ;
        // console.log(currTop)
        // if ( currTop >= otherTop ) {

        // }
    })


    // // 풀페이지 전환 버튼
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


    let sections = Array.from(document.querySelectorAll('section')) ;
    sections.forEach( e => {
        e.style.height = window.innerHeight + 'px'
    })

    // section2 스킬 프로그레스 파트
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const section2 = document.querySelector('.section2');
        const section2Rect = section2.getBoundingClientRect();

        // 아래로 스크롤할 때
        if (lastScroll <= window.pageYOffset) {
            if (section2Rect.top <= 0 && section2Rect.bottom > 0) {
                section2.classList.add('innerView');
            } else {
                section2.classList.remove('innerView');
            }
        }
        // 위로 스크롤할 때
        else {
            if (section2Rect.top <= 0 && section2Rect.bottom > 0) {
                section2.classList.add('innerView');
            } else {
                section2.classList.remove('innerView');
            }
        }

        // 스크롤 위치 업데이트
        lastScroll = window.pageYOffset;
    });


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
