document.addEventListener('DOMContentLoaded' , () => {
    // 햄버거
    let hambMenu = document.querySelector('.hambuger') ;
    if ( hambMenu ) {
        let blackPage = document.querySelector('.blackPager') ;
        hambMenu.addEventListener('click' , e => {
            hambMenu.classList.toggle('act_hamb') ;
            hambMenu.classList.contains('act_hamb') ? hambMenu.classList.remove('return') : hambMenu.classList.add('return')

            console.log(blackPage)
        })
    }


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


    // 마우스 휠 이벤트
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