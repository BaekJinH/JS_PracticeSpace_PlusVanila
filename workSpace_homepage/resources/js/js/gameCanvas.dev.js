"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// setting game or canvas
// Class Ver
var game =
/*#__PURE__*/
function () {
  function game() {
    _classCallCheck(this, game);

    console.log('Export Comp!');
    this.gmCanvas = document.querySelector('#gameCanvas');
    this.ctx = this.gmCanvas.getContext('2d');
    this.gmCanvas.width = window.innerWidth;
    this.gmCanvas.height = window.innerHeight;
    this.isDown = false;
    this.leftMove = false;
    this.rightMove = false;
    this.upMove = false;
    this.downMove = false;
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    document.addEventListener('keyup', this.keyUpHandler.bind(this));
  }

  _createClass(game, [{
    key: "keyDownHandler",
    value: function keyDownHandler(event) {// 키 다운 이벤트 처리 로직
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {// 키 업 이벤트 처리 로직
    }
  }]);

  return game;
}(); // 아래는 class 사용하지 않은 것
// export function gmSetting () {
//     console.log('Export Comp!')
//     const gmCanvas = document.querySelector('#gameCanvas') ;
//     const ctx = gmCanvas.getContext('2d');
//     gmCanvas.width = window.innerWidth ;
//     gmCanvas.height = window.innerHeight ;
//     let isDown = false;
//     let leftMove = false;
//     let rightMove = false;
//     let upMove = false;
//     let downMove = false;
//     document.addEventListener('keydown' , keyDownHandler) ;
//     document.addEventListener('keyUp' , keyUpHandler) ;
//     function keyDownHandler() {
//     }
//     function keyUpHandler() {
//     }
//     // field
// }


exports.game = game;
//# sourceMappingURL=gameCanvas.dev.js.map
