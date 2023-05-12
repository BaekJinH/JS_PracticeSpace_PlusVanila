"use strict";

//  개발자 도구 블락 -> 개발 끝나면 주석 풀기
// !function () {
//     function detectDevTool(allow) {
//         if(isNaN(+allow)) allow = 100;
//         var start = +new Date();
//         debugger;
//         var end = +new Date();
//         if(isNaN(start) || isNaN(end) || end - start > allow) {
//           // 개발자 도구가 open 된것을 감지했을때 실행할 코드 삽입
//         }
//       }
//       if(window.attachEvent) {
//         if (document.readyState === "complete" || document.readyState === "interactive") {
//             detectDevTool();
//           window.attachEvent('onresize', detectDevTool);
//           window.attachEvent('onmousemove', detectDevTool);
//           window.attachEvent('onfocus', detectDevTool);
//           window.attachEvent('onblur', detectDevTool);
//         } else {
//             setTimeout(argument.callee, 0);
//         }
//       } else {
//         window.addEventListener('load', detectDevTool);
//         window.addEventListener('resize', detectDevTool);
//         window.addEventListener('mousemove', detectDevTool);
//         window.addEventListener('focus', detectDevTool);
//         window.addEventListener('blur', detectDevTool);
//       }
// }();
window.addEventListener('keydown', function (e) {
  if (e.defaultPrevented) {
    return;
  }

  var isHandle = false; // 단축키 개발자 도구 블락 -> 마찬가지로 끝나면 블락 풀기
  // if (e.keyCode == 67) {
  //     isHandle = true
  // }
  // if (e.ctrlKey) {
  //     isHandle = true
  // }
  // if (e.shiftKey) {
  //     isHandle = true
  // }

  if (isHandle) {
    console.log("".concat(e.keyCode, " Block ! "));
    e.preventDefault();
  }
});
$(function () {
  $(document).bind("contextmenu", function (e) {
    console.log(e);
    return false;
  });
});
//# sourceMappingURL=block.dev.js.map
