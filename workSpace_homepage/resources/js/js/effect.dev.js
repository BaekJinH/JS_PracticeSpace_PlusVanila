"use strict";

// window.addEventListener('load' , () => {
//     window.setTimeout( () => {
//         document.querySelector('.loading').classList.add('fade') ;
//     } , 1000)
// })
// 아래는 DOM 컨텐츠 로드되면 실행 / 위의 주석은 지정한 타임 지나면 자동 실행
document.addEventListener('DOMContentLoaded', function () {
  window.setTimeout(function () {
    document.querySelector('.loading').classList.add('fade');
  });
}); // 날짜 가져오기

var nowDate = Date.now();
var today = new Date(nowDate);
var dateCompile = today.toLocaleDateString();
console.log(dateCompile); //  로딩 페이지 클래스 감지

function viewChange() {
  var isLoad = true;
  var loadPage = document.querySelector('.loading');
  var visualPage = document.querySelector('.after_load');
  var hasClass = loadPage.classList.contains('fade');

  if (hasClass) {
    visualPage.classList.add('active');
    console.log(hasClass);
  } else {
    visualPage.classList.remove('active');
  }
}

window.addEventListener('load', function () {
  viewChange();
}); // 햄버거 클래스 토글

function hambAnimate() {
  document.querySelector('.hambuger').classList.toggle('act_hamb');
} // 하단 카테고리 박스 이벤트 + 이펙트 / 돔 컨텐츠 로드 후 2초 지나면 하단 카테고리 생성 후 다시 숨기기


function box_eventTime() {
  document.addEventListener('DOMContentLoaded', function (e) {
    window.setTimeout(function () {
      document.querySelector('.category_box').classList.add('move_box');
      window.setTimeout(function () {
        document.querySelector('.category_box').classList.remove('move_box');
      }, 5000);
    }, 2000);
  });
}

box_eventTime(); //  카테고리 박스 하위 요소 애니메이션

function bonuce_animate() {} // 비동기 처리 방식으로 바꿈. 제이쿼리 $(function()) 을 써도 되지만 자바스크립트로 처리해보고 싶었음
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
  var moveBox = document.querySelector('.category_box');
  moveBox.addEventListener('mouseover', function (e) {
    console.log('a');
    moveBox.classList.add('open_box');
  });
  moveBox.addEventListener('mouseleave', function (e) {
    console.log('b');
    moveBox.classList.remove('open_box');
  });
}

document.addEventListener('DOMContentLoaded', openEffect); //  헤더 현재 스크롤 위치 이벤트

document.addEventListener('scroll', function (e) {
  // 다 만들고 isFixed 이용해서 리팩토링 하기
  var isFixed = false;
  var now_scroll = window.scrollY; // 하단 카테고리 박스가 어느 위치에서 나올지 위치 값

  var box_fixedHeight = document.querySelector("header").offsetHeight + 600; // 헤더의 높이 값

  var pin_height = document.querySelector("header").offsetHeight;
  var minus_ele = pin_height - 1;
  var pin_result = pin_height - minus_ele; // pin_height > now_scroll ? pin_height.classList.add('fixed_header') : pin_height.classList.remove('fixed_header')

  pin_result > now_scroll ? header_removeClass() : header_addClass();

  function header_addClass() {
    document.querySelector('header').classList.add('fixed_header');
  }

  function header_removeClass() {
    document.querySelector('header').classList.remove('fixed_header');
  }

  console.log(pin_result);
  console.log(box_fixedHeight);
});
//# sourceMappingURL=effect.dev.js.map
