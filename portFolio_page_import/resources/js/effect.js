document.addEventListener('DOMContentLoaded' , () => {
    // 햄버거
    let hambMenu = document.querySelector('.hambuger')
    if ( hambMenu ) {
        hambMenu.addEventListener('click' , () => {
            hambMenu.classList.add('hambOn')
        })
    }


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