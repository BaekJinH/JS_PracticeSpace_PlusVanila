// 인스턴스 생성 안 하고 불러오는 방식
// import { game , logueLike } from "./gameCanvas.js"
// import { game } from "./gameCanvas.js"
import * as GameCanvas from "./gameCanvas.js";
import {
    Interac
} from "./interactive.js"

// 모든 요소 Import 방식 --> 인스턴스 생성도 싫고 Import 시 개별적으로 불러오는 것도 싫다면 전부 불러와 as로 이름을 지정해주자
// 불러온 파일을 인스턴스 생성 후 변수로 지정하면 된다.
// let gameInstance = new GameCanvas.game();
// let logueLikeInstance = new GameCanvas.logueLike();


// ---------------------------- <  위는 모듈화한 파일들을 불러오는 예시  /> -------------------------------


// import * as module from "./gameCanvas.js"

// window.addEventListener('load' , () => {
//     window.setTimeout( () => {
//         document.querySelector('.loading').classList.add('fade') ;
//     } , 1000)
// })



// 아래는 DOM 컨텐츠 로드되면 실행 / 위의 주석은 지정한 타임 지나면 자동 실행
document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        document.querySelector('.loading').classList.add('fade')
    })
})


// Whale 앱 우클릭 드래그 그림 그리기 / 그리기 인식 -> 인식 후 해당 모양에 맞는 이벤트 실행
let lines = [];
let canvas = document.querySelector('#rightDrag');
const dCtx = canvas.getContext('2d');

// drag 핸들러 호출
document.addEventListener('mousedown', e => {
    if (e.button === 2 || e.which === 3) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        dCtx.strokeStyle = "#fff";
        dCtx.lineWidth = 5;
        canvas.style.display = "block";
        canvas.style.zIndex = 10;

        // 새로운 선 시작 시 lines 배열 초기화
        lines = [];

        // 마우스 움직임 이벤트 리스너 추가
        document.addEventListener('mousemove', handleMouseMove);
    }
});

document.addEventListener('mouseup', e => {
    if (e.button === 2 || e.which === 3) {
        canvas.style.display = "none";
        canvas.style.zIndex = 1;

        // 마우스 움직임 이벤트 리스너 제거
        document.removeEventListener('mousemove', handleMouseMove);
    }
});

function handleMouseMove(e) {
    let pointX = e.offsetX;
    let pointY = e.offsetY;

    if (lines.length === 0) {
        dCtx.beginPath();
        dCtx.moveTo(pointX, pointY);
    } else {
        dCtx.lineTo(pointX, pointY);
        dCtx.stroke();
    }

    lines.push({
        pointX,
        pointY,
        endX: pointX,
        endY: pointY
    });

    for (const line of lines) {
        const {
            pointX,
            pointY,
            endX,
            endY
        } = line;

        const directionX = endX - pointX;
        const directionY = endY - pointY;

        if (directionX > 0) {
            console.log('선은 오른쪽으로 향합니다.');
        } else if (directionX < 0) {
            console.log('선은 왼쪽으로 향합니다.');
        } else {
            console.log('선은 수평 방향입니다.');
        }

        if (directionY > 0) {
            console.log('선은 아래로 향합니다.');
        } else if (directionY < 0) {
            console.log('선은 위로 향합니다.');
        } else {
            console.log('선은 수직 방향입니다.');
        }
    }

    console.log(lines);
}

// 선을 부드럽게 하기 위한 line 알고리즘 -> 이해하기
function drawSmoothLine(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    while (true) {
        dCtx.lineTo(x0, y0);

        if (x0 === x1 && y0 === y1) {
            break;
        }

        let e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0 += sy;
        }
    }

    dCtx.stroke();
}

// Game Canvas 불러오기
// 확인용
let gameInstances = ['game', 'lougeLike', 'puzzle', 'chess'].map(className => new GameCanvas[className]());
console.log(gameInstances)

// console.log(module.gmSetting())



// 인터렉티브 효과들 import 하기
let loadEffect = new Interac()
let effects = ['growTree', 'turnOffLight', 'fallenSnow', 'darkSkyStarlight', 'stickyText', 'textScreen'].map(effect => loadEffect[effect]());

// 배포 단계에서는 이 부분을 주석 처리하거나 삭제하는 것이 좋습니다.
console.log(effects);




// 날짜 가져오기
const nowDate = Date.now();
const today = new Date(nowDate);
const dateCompile = today.toLocaleDateString()
console.log(dateCompile)


//  로딩 페이지 클래스 감지
function viewChange() {
    const isLoad = true;
    const loadPage = document.querySelector('.loading')
    const visualPage = document.querySelector('.after_load')
    const hasClass = loadPage.classList.contains('fade')

    if (hasClass) {
        visualPage.classList.add('active')
        console.log(hasClass)
    } else {
        visualPage.classList.remove('active')
    }
}

window.addEventListener('load', () => {
    viewChange()
})


// 햄버거 클래스 토글 + 햄버거 클릭 시 나오는 메뉴
document.querySelector('.hambuger').addEventListener('click', () => {
    let hamb = document.querySelector('.hambuger');
    let hambMenu = document.querySelector('.blind_effect');
    hamb.classList.contains('act_hamb') ? hambMenu.classList.remove('on') : hambMenu.classList.add('on')
    hamb.classList.toggle('act_hamb');
    hamb.classList.contains('act_hamb') ? hamb.classList.remove('return') : hamb.classList.add('return')
    hambMenu.classList.contains('on') ? hamb.classList.add('bgOn') : hamb.classList.remove('bgOn')
})

// 햄버거 서브 메뉴 풀 사이즈로 보기
let subFull = document.querySelector('.subFull_size');
subFull.addEventListener('click', e => {
    let hambMenu = document.querySelector('.blind_effect');
    hambMenu.classList.add('return')
    // setTimeout( () => {
    //     hambMenu.classList.remove('return')
    // },2000)
    hambMenu.classList.toggle('fullSize_on')
    if (hambMenu.classList.contains('fullSize_on')) {

    }
})



// 하단 카테고리 박스 이벤트 + 이펙트 / 돔 컨텐츠 로드 후 2초 지나면 하단 카테고리 생성 후 다시 숨기기
function box_eventTime() {
    document.addEventListener('DOMContentLoaded', e => {
        window.setTimeout(() => {
            document.querySelector('.category_box').classList.add('fixed_foot')
            window.setTimeout(() => {
                document.querySelector('.category_box').classList.remove('fixed_foot')
                if (document.querySelector('header').classList.contains('fixed_header')) {
                    document.querySelector('.category_box').classList.add('fixed_foot')
                }
            }, 5000)
        }, 2000)
    })
}

box_eventTime()

// 텍스트 자동 증가
// document.addEventListener('scroll' , () => {
//     console.log(window.scrollY)
//     let scOffset = window.scrollY;
//     let num = 0;
//     let maxNum = 100 ;
//     if ( scOffset >= 800 ) {
//         setInterval( () => {
//             if ( num <= maxNum ) {
//                 document.body.innerHTML = num++
//             }

//         },100)
//     }
// })



// 비동기 처리 방식으로 바꿈. 제이쿼리 $(function()) 을 써도 되지만 자바스크립트로 처리해보고 싶었음

// function openEffect ()  {
//     const moveBox = document.querySelector('.category_box');
//     moveBox.addEventListener('mouseover' , async (e) => {
//         await doSomethingAsync();
//         console.log('a')
//     })
// }

// async function doSomethingAsync() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     });
// }


// openEffect()
function openEffect() {
    const moveBox = document.querySelector('.category_box');
    moveBox.addEventListener('mouseover', e => {
        console.log('a')
        document.querySelector('.category_box').classList.add('open_box')
    })
    moveBox.addEventListener('mouseleave', e => {
        console.log('b')
        document.querySelector('.category_box').classList.remove('open_box')

    })
}

document.addEventListener('DOMContentLoaded', openEffect)


//  헤더 현재 스크롤 위치 이벤트
document.addEventListener('scroll', e => {
    // 다 만들고 isFixed 이용해서 리팩토링 하기
    let isFixed = false;
    let now_scroll = window.scrollY

    // 하단 카테고리 박스가 어느 위치에서 나올지 위치 값
    // const box_fixedHeight = document.querySelector("header").offsetHeight + 600;

    // 헤더의 높이 값
    let pin_height = document.querySelector("header").offsetHeight;
    let minus_ele = pin_height - 1
    let pin_result = pin_height - minus_ele


    pin_result > now_scroll ? header_removeClass() : header_addClass()


    function header_addClass() {
        document.querySelector('header').classList.add('fixed_header')
        document.querySelector('.category_box').classList.add('fixed_foot')
    }

    function header_removeClass() {
        document.querySelector('header').classList.remove('fixed_header')
        document.querySelector('.category_box').classList.remove('fixed_foot')
    }

    //
    // if ( !isFixed ) {

    // }
    // console.log(box_fixedHeight)
})


// 헤더 안 특정 요소만 sticky 이벤트
// document.addEventListener('scroll' , e => {
//     let logLine = document.querySelector('header .logo_line').offsetHeight ;
//     let nav = document.querySelector('nav');
//     let navHe = document.querySelector('nav').offsetHeight;

//     if ( window.scrollY >= logLine) {
//         nav.classList.add('sticky_nav')
//     }
//     else {
//         nav.classList.remove('sticky_nav')
//     }
//     nav.classList.contains('sticky_nav') ? document.querySelector('#wrapper').style.paddingTop = navHe + 'px' : document.querySelector('#wrapper').style.paddingTop = 0 + 'px'
// })





// 키보드에서 글자 입력하면 absolute로 플로팅 처리해서 위로 띄우기 -> 해당 코드 완성되면 입력했던 키가 엔터키를 누르기 전까지는 배열로 들어가서 합쳐지도록 만들기 될란지는;
let floatBtn = document.querySelector('.float_effect_on');
let offBtn = document.querySelector('.float_effect_off');
let floatWrap = document.querySelector('#float_wrap')

offBtn.addEventListener('click', () => {
    floatWrap.classList.remove('floating_on')
    if (!(floatWrap.classList.contains('floating_on'))) {
        alert('글자 효과가 제거되었습니다!')
    }
});

floatBtn.addEventListener('click', textFloat);

function textFloat() {
    floatWrap.classList.add('floating_on')
    let isKey = false;

    window.addEventListener('keydown', e => {
        let textArr = [];
        isKey = true;
        textArr.push(e.key)

        console.log(textArr)
    })
    window.addEventListener('keyup', e => {
        isKey = false;
        console.log(isKey)
    })

    if (isKey) {

    }
}
// console.log(floatBtn) -- 확인용

// DOM이라 오류 남
// ptCircle.style.width = ptSize ;
// ptCircle.style.height = ptSize ;
// ptCircle.style.backgroundColor = `rgba(${ptColor} + ${ptColor} + ${ptColor} + 0.7)` ;
// 홈페이지 효과용 Canvas  / 위는 gpt가 보완한 코드 아래는 바닐라 소스 코드 지피티가 짜준 걸로 밑에 코드 보완해서 새롭게 만들기

const ptCanvas = document.querySelector('#canvas');
ptCanvas.width = window.innerWidth;
ptCanvas.height = window.innerHeight;
const ctx = ptCanvas.getContext('2d');
ptCanvas.addEventListener('click', particleEffect)

function particleEffect(e) {
    let pointX = e.clientX;
    let pointY = e.clientY;
    let ptCount = Math.floor(Math.random() * 20);
    let particles = [];
    let time = 5;

    for (let i = 0; i < ptCount; i++) {
        let ptSize = Math.floor(Math.random() * 30);
        let ptColor = [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)
        ];
        let angle = Math.random() * 2 * Math.PI;
        let distance = Math.random() * 100;

        let particleX = pointX;
        let particleY = pointY;
        let speed = Math.random() * 2 + 1;

        particles.push({
            x: particleX,
            y: particleY,
            size: ptSize,
            color: ptColor,
            speed,
            angle,
            distance
        });
    }

    animateParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, ptCanvas.width, ptCanvas.height);

        particles.forEach((particle, index) => {
            particle.x += Math.cos(particle.angle) * particle.speed;
            particle.y += Math.sin(particle.angle) * particle.speed;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
            ctx.fillStyle = `rgb(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]})`;
            ctx.fill();
            ctx.closePath();

            if (particle.x < 0 || particle.x > ptCanvas.width || particle.y < 0 || particle.y > ptCanvas.height) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animateParticles);
        }
    }
}


// const ptCanvas = document.querySelector('#canvas')
// ptCanvas.width = window.innerWidth;
// ptCanvas.height = window.innerHeight;
// const ctx = ptCanvas.getContext('2d')
// ptCanvas.addEventListener('click' , particleEffect)

// function particleEffect (e) {
//     let pointX = e.clientX;
//     let pointY = e.clientY;
//     let ptCount = Math.floor(Math.random() * 20) ;
//     let rndNum ;
//     let createPosX = [pointX]
//     let createPosY = [pointY]

//     // Start Drawing Circle
//     for ( let i = 1 ; i < ptCount ; i++) {
//         rndNum = Math.random()
//         pointX += Math.floor(Math.random() * 50 )
//         pointY += Math.floor(Math.random() * 50 )

//         if ( rndNum <= 0.5 ) {
//             pointX *= -1
//             pointY *= -1
//         }
//         else {
//             pointX
//             pointY

//         }
//         createPosX.push(pointX);
//         createPosY.push(pointY);
//         let ptSize = Math.floor(Math.random() * 30);
//         let ptColor = [ Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255) ] ;
//         ctx.beginPath()
//         ctx.arc(pointX, pointY, ptSize, 0, Math.PI * 2, false) ;
//         ctx.fillStyle = `rgb(${ptColor[0]} , ${ptColor[1]} , ${ptColor[2]})`;
//         ctx.fill()
//         ctx.closePath()
//     }


//     console.log(createPosX , createPosY , rndNum , pointX )
//     // console.log(ptSize , ptCount , pointX , pointY , ctx )
// }


// ctx.ptCircle
// for ( let e = 0 ; e < ptColor.length ; e++) {
//     console.log(e)
//     ctx.fillStyle = `rgb(${ptColor} , ${ptColor} , ${ptColor}  )`;
// }



// Modal 창 생성 후 오픈 / 목표 -> DOM의 mainMd 안의 컨텐츠를 가져온 후 그걸 그대로 모달로 생성. 모달을 닫으면 컨텐츠 비우기

// // Object.assign 방식
// function openNew_modal () {
//     let mainMd = document.querySelector('.modal_base') ;
//     document.body.appendChild(
//         Object.assign(
//             document.createElement('div'),
//             { id : 'modal'} ,
//             { textContent : 'hello'}
//         )
//     )
//     console.log(mainMd)

// }
// // modal 생성 테스트용 다 만들어지면 onclick으로 뺴버리기


let mainMd = document.querySelector('.modal_base');
let baseContent = mainMd.innerHTML;

let modalWrap = document.querySelector('#modal_area');
let modalIn = document.querySelector('#modal_area .modal_inner');
document.querySelector('.open_modal').addEventListener('click', () => {
    modalIn.innerHTML = `
        ${baseContent}
    `;

    modalWrap.style.zIndex = 1
    // document.body.style.overflow = hidden;
    console.log(modalWrap)
})




// 인풋 창 내용 입력 시 모달 창 생성 후 플롯 => 보류
// let mdContents = document.querySelector('.modal_int')
// let otherContents = document.querySelector('input[type=text]')

// let mdSet = document.createElement( 'div' )
// mdSet.innerHTML = `
//     <div class="modalInner">
//         <div class="close"></div>
//         <div class="main">
//             <div class="contents"> ${otherContents} </div>
//         </div>
//     </div>
//     `
// console.log(mdSet)




// Vanila Slide 만들기

function vanilaSlide() {

    // Setting
    const slideWrap = document.querySelector('.slideWrap');
    const slideEl = Array.from(document.querySelectorAll('.slide'));
    const leftBtn = document.querySelector('.slideWrap .left_arrow');
    const rightBtn = document.querySelector('.slideWrap .right_arrow');
    const createEl = document.createElement('div')
    createEl.classList.add('slide')

    slideEl.push(createEl);

    // console.log('a' , createEl , slideEl)
}

window.addEventListener('resize', (e) => {
    let wSize = window.innerWidth;
    if (wSize >= 1025) {
        console.log('1025 >')

    }
    if (wSize <= 1024 && wSize >= 425) {
        console.log('1024 <')

    }
    if (wSize < 425) {
        console.log('425')

    }
})
window.setInterval(vanilaSlide, 3000);



// progress bar
// let number = document.querySelector('.progress .overlay');
// let counter = 0;
// let maxCounter = 100;
// let loopInterval = setInterval(() => {
//   if (counter === maxCounter) {
//     counter = 0;
//   } else {
//     counter += 1;
//   }
//   number.innerHTML = counter;
//   drawProgress(number, counter, maxCounter);
// }, 100);




// 회원가입








// drag and drop  -> 마저 수정하기

let mouseEvent = false;
let dragEl = Array.from(document.querySelectorAll('.dragWrap > div'));
dragEl.forEach((el, index) => {

})
document.addEventListener('mousedown', e => {
    mouseEvent = true;
    dragEl.forEach((ele, index) => ele.addEventListener('mousemove', (e) => {
        document.addEventListener('mousemove', e => {
            let pointX = e.clientX
            let pointY = e.clientY

            dragEl[index].style.left = pointX + 'px'
            dragEl[index].style.top = pointY + 'px'


            document.addEventListener('mouseup', e => {
                mouseEvent = false;

            })

            console.log(index)
        })
    }))
    if (!(mouseEvent)) {
        console.log('a')
        e.preventDefault()
    } else {

    }
})


// 분리를 해서 따로 지정해야 하나?




// 네이버 안내 페이지 카드 효과 - > 플릭 카드 ?
// 해당 위치 되면 fixed 이용해서 화면 풀페이지로 만든 후 이벤트 실행인 거 같음
const sec5 = document.querySelector('.sec5');
const contentFixed = sec5.querySelector('.contentFixed')
const contentInner = document.querySelector('.contentInner');
contentInner.style.transition = `top 0.3s ease`;


function handleScroll(e) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sec5Bottom = sec5.offsetTop + sec5.offsetHeight;
    const cardItems = sec5.querySelectorAll('.cardItem');
    let totalHeight = 0;

    cardItems.forEach((cardItem) => {
        totalHeight += cardItem.offsetHeight
    })
    contentFixed.style.height = `${totalHeight}px`
    // contentFixed.style.height = `${screen.availHeight}px` ;
    // pageYoffset 보고 있는 화면의 Top값
    console.log(window.pageYOffset)
    if (scrollTop + window.innerHeight >= sec5Bottom) {
        contentInner.style.position = 'fixed';
        contentInner.style.top = 0;
        // console.log(sec5Bottom , scrollTop + window.innerHeight);
    } else {
        contentInner.style.position = 'initial';
    }
}

// scroll 이벤트가 아닌 obseve 를 이용해야 함
window.addEventListener('scroll', handleScroll);



// 아래는 해당 위치 되면 sticky를 부여
// const sec5 = document.querySelector('.sec5');
// const contFixed = sec5.querySelector('.contentFixed')
// const contentInner = sec5.querySelector('.contentInner');

// function handleScroll(e) {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const sec5Bottom = sec5.offsetTop + contentInner.offsetHeight;
//     const sec5Hei = sec5.offsetHeight
//     const resHei = sec5Hei + contentInner.offsetHeight
//     // console.log(scrollTop + window.innerHeight , sec5Bottom + sec5Hei)
//     if (scrollTop + window.innerHeight >= sec5Bottom) {
//         // sec5 영역 감지
//         contentInner.style.position = 'sticky' ;
//         contentInner.style.top = 0 + 'px' ;
//         console.log(resHei)

//         if (scrollTop + window.innerHeight >= sec5Bottom + sec5Hei + contentInner.offsetHeight) {
//             // 영역 끝에 도달했을 떄
//             // contentInner.style.position = 'initial' ;
//             // contentInner.style.top = 0 + 'px';
//         }
//         else if ( scrollTop + window.innerHeight - contentInner.offsetHeight > sec5Bottom + sec5Hei ) {
//             // 영역 벗어날 때
//         }
//     }
// }

// window.addEventListener('scroll', handleScroll);



// 스크롤 시 인덱스 이동  / -> 풀페이지 만들 때 적용하기
window.addEventListener('wheel', e => {
    let page = 1;
    let pageLeng = Array.from(document.querySelectorAll('.flContent'));

    if (page == pageLeng) {
        page = 0;
    }
})