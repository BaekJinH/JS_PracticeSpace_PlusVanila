import { game } from "./gameCanvas.js"
import { Interac } from "./interactive.js"


// import * as module from "./gameCanvas.js"

// window.addEventListener('load' , () => {
//     window.setTimeout( () => {
//         document.querySelector('.loading').classList.add('fade') ;
//     } , 1000)
// })


// 아래는 DOM 컨텐츠 로드되면 실행 / 위의 주석은 지정한 타임 지나면 자동 실행
document.addEventListener('DOMContentLoaded' , () => {
    window.setTimeout( ()=> {
        document.querySelector('.loading').classList.add('fade')
    })
})


// 날짜 가져오기
const nowDate = Date.now();
const today = new Date(nowDate);
const dateCompile = today.toLocaleDateString()
console.log(dateCompile)


//  로딩 페이지 클래스 감지
function viewChange ( ) {
    const isLoad = true;
    const loadPage = document.querySelector('.loading')
    const visualPage = document.querySelector('.after_load')
    const hasClass = loadPage.classList.contains('fade')

    if (hasClass) {
        visualPage.classList.add('active')
        console.log(hasClass)
    }
    else {
        visualPage.classList.remove('active')
    }
}

window.addEventListener('load' , () => {
    viewChange()
})


// 햄버거 클래스 토글
function hambAnimate () {
    document.querySelector('.hambuger').classList.toggle('act_hamb')
}


// 하단 카테고리 박스 이벤트 + 이펙트 / 돔 컨텐츠 로드 후 2초 지나면 하단 카테고리 생성 후 다시 숨기기
function box_eventTime () {
    document.addEventListener('DOMContentLoaded' , e => {
        window.setTimeout( () => {
            document.querySelector('.category_box').classList.add('move_box')
            window.setTimeout( () => {
                document.querySelector('.category_box').classList.remove('move_box')
            }, 5000)
        }, 2000)
    })
}

box_eventTime()

    //  카테고리 박스 하위 요소 애니메이션
function bonuce_animate () {

}


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


function openEffect () {
    const moveBox = document.querySelector('.category_box');
    moveBox.addEventListener('mouseover' , e => {
        console.log('a')
        moveBox.classList.add('open_box')
    })
    moveBox.addEventListener('mouseleave' , e => {
        console.log('b')
        moveBox.classList.remove('open_box')
    })
}

document.addEventListener('DOMContentLoaded' , openEffect)


//  헤더 현재 스크롤 위치 이벤트
document.addEventListener('scroll' , e => {
    // 다 만들고 isFixed 이용해서 리팩토링 하기
    let isFixed = false ;
    let now_scroll = window.scrollY

    // 하단 카테고리 박스가 어느 위치에서 나올지 위치 값
    const box_fixedHeight = document.querySelector("header").offsetHeight + 600;

    // 헤더의 높이 값
    let pin_height = document.querySelector("header").offsetHeight;
    let minus_ele = pin_height - 1
    let pin_result = pin_height - minus_ele


    pin_result > now_scroll ? header_removeClass() : header_addClass()

    function header_addClass () {
        document.querySelector('header').classList.add('fixed_header')
    }
    function header_removeClass () {
        document.querySelector('header').classList.remove('fixed_header')
    }

    console.log(pin_result)
    console.log(box_fixedHeight)
})

// 키보드에서 글자 입력하면 absolute로 플로팅 처리해서 위로 띄우기 -> 해당 코드 완성되면 입력했던 키가 엔터키를 누르기 전까지는 배열로 들어가서 합쳐지도록 만들기 될란지는;
let floatBtn = document.querySelector('.float_effect_on') ;
let offBtn = document.querySelector('.float_effect_off') ;
let floatWrap = document.querySelector('#float_wrap')

offBtn.addEventListener('click' , () => {
    floatWrap.classList.remove('floating_on')
    if ( !(floatWrap.classList.contains('floating_on')) ) {
        alert ( '글자 효과가 제거되었습니다!' )
    }
});

floatBtn.addEventListener('click' , textFloat) ;

function textFloat () {
    floatWrap.classList.add('floating_on')
    let isKey = false;
    window.addEventListener('keydown' , e => {
        let textArr = [] ;
        isKey = true ;
        textArr.push(e.key)

        console.log(textArr)
    })
    window.addEventListener('keyup' , e => {
        isKey = false ;

        console.log(isKey)
    })

    if ( isKey ) {

    }
}
// console.log(floatBtn) -- 확인용


// 홈페이지 효과용 Canvas
const ptCanvas = document.querySelector('#canvas')
const ctx = ptCanvas.getContext('2d')
ptCanvas.width = window.innerWidth;
ptCanvas.height = window.innerHeight;
let isClick = false;
ptCanvas.addEventListener('click' , particleEffect)

function particleEffect () {

}


// Game Canvas 불러오기
// 확인용
let gameInstance = new game()
console.log(gameInstance)

// console.log(module.gmSetting())




// 인터렉티브 효과들 import 하기
let loadEffect = new Interac
console.log(loadEffect.growTree())
console.log(loadEffect.turnOffLight())
console.log(loadEffect.fallenSnow())
console.log(loadEffect.darkSkyStarlight())
console.log(loadEffect.stickyText())
console.log(loadEffect.textScreen())



// Modal 창 생성 후 오픈
let mainMd = document.querySelector('.modal') ;
console.log(mainMd)






// 인풋 창 내용 입력 시 모달 창 생성 후 플롯 => 보류
let mdContents = document.querySelector('.modal_int')
let otherContents = document.querySelector('input[type=text]')

let mdSet = document.createElement( 'div' )
mdSet.innerHTML = `
    <div class="modalInner">
        <div class="close"></div>
        <div class="main">
            <div class="contents"> ${otherContents} </div>
        </div>
    </div>
    `
console.log(mdSet)
