document.addEventListener('DOMContentLoaded' , (event : Event) => {
    // setTimeout Promise로 변경 후 변수로 변수명 통일해서 사용하기
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // 타입스크립트용 HTML엘리먼트 요소가 있는지 확인
    function queryElement(selector : string): HTMLElement {
        const ele = document.querySelector<HTMLElement>(selector) ;
        if  ( !ele ) {
            throw new Error(`${selector}를 찾을 수 없습니다 !`)
        }
        return ele
    }



    // Canvas Click Particle Effect
    let canvas = document.querySelector<HTMLCanvasElement>('#canvas') ;
    // Typescript 의 Null 반환을 위해 사용 ( 옵셔널 체이닝 미 사용 )
    if (!canvas) {
        return ;
    }
    let ctx = canvas.getContext('2d') ;
    let canvasHei: number ;
    let canvasWid: number ;
    let bgColor:string = '#ff6138' ;
    let animation:any[] = [] ;
    interface Circle {
        radius: number ;
        color: [number, number , number] ;
    };
    let numb: number = Math.floor(Math.random() * 20) ;
    let circles: Circle[] = [];
    let r: number = Math.floor(Math.random() * 255);
    let g: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);

    canvas.addEventListener('click' , (e: MouseEvent) => {
        circles.push({radius: 50 , color: [r , g , b] });
    })


    // Click To Open Big Circle
    let circle = queryElement('.subCircle') ;

    // 옵셔널 체이닝 사용
    circle?.addEventListener('click' , (e : MouseEvent) => {

    })


    // BlackPage Text Type Image Animation
    let hambuger = queryElement('.hambuger')
    hambuger?.addEventListener('click' , async (e:MouseEvent) => {
        let imgViewer: HTMLElement = queryElement('.imgViewer') ;
        let imgWrap: HTMLElement = queryElement('.imgViewer > ul') ;
        let imgWrapWidth = window.getComputedStyle(imgWrap).width;
        let imgEle: HTMLElement[] = Array.from(queryElement('.imgViewer').querySelectorAll('li')) ;
        let mainTxt:HTMLElement[] = Array.from(queryElement( '.blackPager > ul' ).querySelectorAll('a'));
        await delay(3500) ;
        mainTxt.forEach( (el , idx) => {
            el.addEventListener('mouseenter' , (e:MouseEvent) => {
                // 해당 인덱스 별 이미지 변환 효과
                mainTxt[idx]
            })
            el.addEventListener('mouseleave' , (e:MouseEvent) => {
                mainTxt[idx]
            })
        })
        imgViewer.style.width = imgWrapWidth;



        console.log(imgViewer , imgWrap , imgEle)
        console.log('Text Slide Effect End !')
    })


    // Scroll Anime
    window.addEventListener('scroll' , (e : Event) => {
        let currTop: number = window.scrollY ;

    });


    // Translate Full Page
    let changeBtn = queryElement('.screenChange');
    let body = queryElement('body');
    let animate: boolean = false;

    changeBtn.addEventListener('click' , async (e : MouseEvent) => {
        body.classList.add('curtain') ;
        if ( !animate ) {
            animate = true ;
            body.classList.add('curtain');
            await delay( 1000 ) ;
            body.classList.remove('curtain') ;
            body.classList.toggle('fullPage') ;
            animate = false;
        }
    })



    // Mouse Wheel Event
    window.addEventListener('wheel', (e: WheelEvent) => {
        if ( e.deltaY > 0 ) {
            let scroll: number = window.innerHeight ;
            window.scrollTo ({
                top : scroll,
                behavior: "smooth" ,
            });
        }
        else {

        }
    })



    // FullPage Setting
    const contentLeng = Array.from<HTMLElement>(document.querySelectorAll('.fullContainer > .content')) ;
    contentLeng.forEach ( el => {
        let dot = document.createElement('div');
        let dotCont =  document.querySelector<HTMLElement>('.dotCont') ;
        let scroll: number = window.scrollY ;
        dot.className = 'dot' ;
        dotCont?.appendChild(dot);
        dot?.addEventListener('click' , (e:MouseEvent) => {
            console.log(dot)
        })
    })
})