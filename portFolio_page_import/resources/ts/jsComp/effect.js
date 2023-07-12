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
var animejs_1 = require("animejs");
// 'setTimeout' 함수를 Promise 형태로 만들어 사용합니다.
var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
document.addEventListener('DOMContentLoaded', function (event) {
    // 햄버거
    var hambMenu = document.querySelector('.hambuger');
    var blackPage = document.querySelector('.blackPage');
    var sdTxt = Array.from(document.querySelectorAll('.blackPager li'));
    var animating = false;
    if (!hambMenu || !blackPage || !sdTxt.length) {
        return;
    }
    var screenClose = animejs_1["default"]({
        targets: blackPage,
        autoplay: false,
        left: ['100%', '0%'],
        easing: 'easeOutBounce',
        duration: 1500,
        elasticity: 0,
        complete: function () {
            animating = false;
        }
    });
    var screenOpen = animejs_1["default"]({
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
    console.log(animejs_1["default"]);
    var bpOn = function () {
        blackPage.classList.remove('bpReturn');
        blackPage.classList.add('bpOn');
    };
    var bpOff = function () {
        blackPage.classList.remove('bpOn');
        blackPage.classList.add('bpReturn');
    };
    blackPage.style.left = '100%';
    hambMenu.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _i, _a, _b, index, element, _c, _d, _e, index, element;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (animating)
                        return [2 /*return*/];
                    animating = true;
                    hambMenu.classList.toggle('act_hamb');
                    if (!hambMenu.classList.contains('act_hamb')) return [3 /*break*/, 6];
                    hambMenu.classList.remove('default', 'return');
                    bpOn();
                    if (screenClose.paused)
                        screenClose.play();
                    screenClose.restart();
                    return [4 /*yield*/, delay(1600)];
                case 1:
                    _f.sent();
                    document.documentElement.style.overflow = 'hidden';
                    _i = 0, _a = sdTxt.entries();
                    _f.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    _b = _a[_i], index = _b[0], element = _b[1];
                    return [4 /*yield*/, delay(index * 100)];
                case 3:
                    _f.sent();
                    element.classList.remove('slidePass');
                    element.classList.add('slideText');
                    animejs_1["default"]({
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
                    _f.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 14];
                case 6:
                    hambMenu.classList.add('return');
                    bpOff();
                    return [4 /*yield*/, delay(500)];
                case 7:
                    _f.sent();
                    _c = 0, _d = sdTxt.entries();
                    _f.label = 8;
                case 8:
                    if (!(_c < _d.length)) return [3 /*break*/, 11];
                    _e = _d[_c], index = _e[0], element = _e[1];
                    return [4 /*yield*/, delay(index * 100)];
                case 9:
                    _f.sent();
                    element.classList.remove('slideText');
                    element.classList.add('slidePass');
                    animejs_1["default"]({
                        targets: element,
                        duration: 500,
                        autoplay: true,
                        easing: 'easeInOutBack',
                        elasticity: 100,
                        translateX: ['0%', '100%']
                    });
                    _f.label = 10;
                case 10:
                    _c++;
                    return [3 /*break*/, 8];
                case 11: return [4 /*yield*/, delay(300)];
                case 12:
                    _f.sent();
                    if (screenOpen.paused)
                        screenOpen.play();
                    screenOpen.restart();
                    return [4 /*yield*/, delay(1000)];
                case 13:
                    _f.sent();
                    document.documentElement.style.overflow = 'auto';
                    _f.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    }); });
});
