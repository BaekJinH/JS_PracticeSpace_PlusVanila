"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var anime_es_1 = require("../lib/plugin/anime.es");
document.addEventListener('DOMContentLoaded', function () {
    // 햄버거
    var hambMenu = document.querySelector('.hambuger');
    var blackPage = document.querySelector('.blackPager');
    var animating = false;
    var sdTxt = Array.from(document.querySelectorAll('.blackPager li'));
    // animeJs
    var screenClose = anime_es_1["default"]({
        targets: blackPage,
        autoplay: false,
        left: ['100%', '0%'],
        easing: 'easeOutBounce',
        duration: 1500,
        elasticity: 0,
        complete: function () {
            // 애니메이션이 끝나면 animating을 false로 변경
            animating = false;
        }
    });
    // let screenClose = anime({
    //     targets: blackPage,
    //     autoplay: false,
    //     left: ['100%', '0%'],
    //     easing: 'easeOutElastic(6, .4)',
    //     duration: 4000,
    //     complete: function() { // 애니메이션이 끝나면 animating을 false로 변경
    //         animating = false;
    //     }
    // });
    var screenOpen = anime_es_1["default"]({
        targets: blackPage,
        autoplay: false,
        left: ['0%', '100%'],
        easing: 'easeInOutBack',
        duration: 1000,
        begin: function () {
            animating = true;
        },
        complete: function () {
            animating = false;
        }
    });
    if (hambMenu) {
        blackPage.style.left = "100%";
        hambMenu.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (animating)
                            return [2 /*return*/];
                        animating = true;
                        hambMenu.classList.toggle('act_hamb');
                        if (!hambMenu.classList.contains('act_hamb')) return [3 /*break*/, 2];
                        hambMenu.classList.remove('default'), hambMenu.classList.remove('return'), bpOn(), (screenClose.paused ? screenClose.play() : null), screenClose.restart();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1600); })];
                    case 1:
                        _a = (_b.sent(), // wait for 4 seconds
                            document.querySelector('html').style.overflow = 'hidden',
                            (function () { return __awaiter(void 0, void 0, void 0, function () {
                                var _loop_1, _i, sdTxt_1, element;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _loop_1 = function (element) {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () {
                                                                element.classList.remove('slidePass');
                                                                element.classList.add('slideText');
                                                                var txtSd = anime_es_1["default"]({
                                                                    targets: element,
                                                                    duration: 1000,
                                                                    autoplay: true,
                                                                    easing: 'easeInOutBack',
                                                                    translateX: ['-100%', '0%'],
                                                                    begin: function () {
                                                                        animating = true;
                                                                    },
                                                                    complete: function () {
                                                                        animating = false;
                                                                    }
                                                                });
                                                                resolve();
                                                            }, sdTxt.indexOf(element) * 100); })];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            _i = 0, sdTxt_1 = sdTxt;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < sdTxt_1.length)) return [3 /*break*/, 4];
                                            element = sdTxt_1[_i];
                                            return [5 /*yield**/, _loop_1(element)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        return [3 /*break*/, 4];
                    case 2:
                        hambMenu.classList.add('return'), bpOff();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 3:
                        _a = (_b.sent(),
                            (function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, sdTxt.reduce(function (prevPromise, e, i) { return __awaiter(void 0, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, prevPromise];
                                                        case 1:
                                                            _a.sent();
                                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () {
                                                                    e.classList.remove('slideText');
                                                                    e.classList.add('slidePass');
                                                                    var txtPs = anime_es_1["default"]({
                                                                        targets: e,
                                                                        duration: 500,
                                                                        autoplay: true,
                                                                        // easing: 'easeInOutQuad',
                                                                        easing: 'easeInOutBack',
                                                                        elasticity: 100,
                                                                        translateX: ['0%', '100%']
                                                                    });
                                                                    resolve();
                                                                }, i * 100); })];
                                                        case 2:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }, Promise.resolve())];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                                        case 2:
                                            _a.sent();
                                            (screenOpen.paused ? screenOpen.play() : null),
                                                screenOpen.restart();
                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                                        case 3:
                                            _a.sent();
                                            document.querySelector('html').style.overflow = 'auto';
                                            return [2 /*return*/];
                                    }
                                });
                            }); })());
                        _b.label = 4;
                    case 4:
                        _a;
                        return [2 /*return*/];
                }
            });
        }); });
    }
    // black Page
    var bpOn = function () {
        blackPage.classList.remove('bpReturn');
        blackPage.classList.add('bpOn');
    };
    var bpOff = function () {
        blackPage.classList.remove('bpOn');
        blackPage.classList.add('bpReturn');
    };
    // 햄버거 관련 효과 끝
    // Canvas 백그라운드 코드를 이해하고 작성할 수 있게 되면 사용하기
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var canvasHei;
    var canvasWid;
    var bgColor = '#ff6138';
    var animation = [];
    var circles = [];
    //  서브 서클
    var circle = document.querySelector('.subCircle');
    if (circle) {
        circle.addEventListener('click', function (e) {
        });
    }
    // 스크롤
    window.addEventListener('scroll', function (e) {
        var currTop = window.scrollY;
        // console.log(currTop)
        // if ( currTop >= otherTop ) {
        // }
    });
    // 풀페이지 전환 버튼
    var changeBtn = document.querySelector('.screenChange');
    var body = document.querySelector('body');
    changeBtn.addEventListener('click', function (e) {
        body.classList.add('curtain');
        setTimeout(function () {
            body.classList.remove('curtain');
            body.classList.toggle('fullPage');
            // if ( body.classList.contains('fullPage')) {
            //     body.classList.toggle('a')
            // }
        }, 1000);
    });
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
    // 마우스 휠 이벤트a
    window.addEventListener('mousewheel', function (e) {
        if (e.deltaY > 0) {
            var scroll = window.innerHeight;
            window.scrollTo({
                // top: scroll,
                behavior: "smooth"
            });
            console.log(scroll);
        }
        else {
        }
    });
    // 풀페이지
    var contentLeng = Array.from(document.querySelectorAll('.fullContainer > .content'));
    contentLeng.forEach(function (el) {
        var dot = document.createElement('div');
        var scroll = window.scrollY;
        dot.className = 'dot';
        document.querySelector('.dotCont').appendChild(dot);
        dot.addEventListener('click', function (e) {
        });
    });
    // 테마 색 반전
});
