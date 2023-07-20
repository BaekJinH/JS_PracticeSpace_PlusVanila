window.addEventListener('DOMContentLoaded' , () => {
    // Scroll Spin Ball
    function sclBall (e) {
        const variabList = {
            spinCc: document.querySelector('.fixSpinCc') ,
            scrollRecog: e.deltaY ,
            sclY: window.scrollY || document.documentElement.scrollTop,
        }


        if ( variabList.scrollRecog > 0 ) {
            scrollDown( variabList )
        }
        else {
            scrollUp( variabList )
        }

        if ( variabList.sclY >= 200 && variabList.spinCc.classList.contains('spinCc') ) {

        }

    } ;

    const scrollDown = function scrollDown(variabList) {
        variabList.spinCc.classList.add('spinCc')

        // variabList.spinCc.style.transform = ' rotate(1080deg) scale(.5)' ;
        // variabList.spinCc.style.transition = 'all .5s' ;
        // variabList.spinCc.style.left = '0%' ;
    }
    const scrollUp = function scrollUp(variabList) {
        variabList.spinCc.classList.remove('spinCc')

        // variabList.spinCc.style.transform = ' rotate(1080deg) translateX(-50%) scale(1)' ;
        // variabList.spinCc.style.left = '50%' ;
    }

    document.addEventListener('wheel' , sclBall)


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
        document.querySelector('.dotCont').appendChild(dot);

    });


    // // 테마 색 반전

})



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
