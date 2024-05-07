// 시각적 효과를 처리하는 모듈
const VisualEffects = (() => {
  function fadeEffect() {
    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('fade');
  }

  function initializeCanvas() {
    const canvas = document.querySelector('#rightDrag');
    const context = canvas.getContext('2d');
    return {
      canvas,
      context
    };
  }

  return {
    fadeEffect,
    initializeCanvas,
  };
})();

// 사용자 인터랙션을 처리하는 모듈
const UserInteractions = (() => {
  let lines = [];

  function handleRightClickDraw({
    canvas,
    context,
  }) {
    document.addEventListener('mousedown', e => {
      if (e.button === 2) { // 오른쪽 클릭
        canvas.style.display = "block"
        setupCanvas(canvas, context);
        document.addEventListener('mousemove', mouseMoveHandler(context));
      }
    });

    document.addEventListener('mouseup', e => {
      if (e.button === 2) {
        canvas.style.display = "none";
        document.removeEventListener('mousemove', mouseMoveHandler(context));
      }
    });

    function setupCanvas(canvas, context) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = "none";
      context.strokeStyle = `${random}`;
      context.lineWidth = 5;
      context.lineCap = "round";
      lines = [];
    }

    function mouseMoveHandler(context) {
      return e => {
        drawLine(e, context);
      };
    }

    function drawLine(e, context) {
      if (lines.length === 0) {
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
      } else {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
      }
      lines.push({
        x: e.offsetX,
        y: e.offsetY
      });
    }
  }

  function loadToPage() {
    const isLoad = false;
    let loadPage = document.querySelector('.loading');
    let mainPage = document.querySelector('.after_load');
    let hasClass = loadPage.classList.contains('fade');

    hasClass ?
      mainPage.classList.add('active') :
      isLoad = true,
      mainPage.classList.remove('active');
  }

  const FST_TIME = 2000;
  const SCD_TIME = 5000;

  function eventList({

  }) {

  }

  return {
    handleRightClickDraw,
    loadToPage,
    eventList
  };
})();

// 이벤트 리스너 및 초기 상태를 설정하는 초기화 함수
function initialize() {
  const {
    canvas,
    context
  } = VisualEffects.initializeCanvas();
  UserInteractions.handleRightClickDraw({
    canvas,
    context
  });
  document.addEventListener('DOMContentLoaded', VisualEffects.fadeEffect, UserInteractions.loadToPage);
}

window.addEventListener('load', initialize);