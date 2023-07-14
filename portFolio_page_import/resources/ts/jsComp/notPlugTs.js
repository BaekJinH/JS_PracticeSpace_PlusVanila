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
var _this = this;
document.addEventListener('DOMContentLoaded', function (event) {
    // setTimeout Promise로 변경 후 변수로 변수명 통일해서 사용하기
    var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
    // 타입스크립트용 HTML엘리먼트 요소가 있는지 확인
    function queryElement(selector) {
        var ele = document.querySelector(selector);
        if (!ele) {
            throw new Error(selector + "\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 !");
        }
        return ele;
    }
    // Canvas Click Particle Effect
    var partEffBtn = queryElement('.partBtn');
    partEffBtn === null || partEffBtn === void 0 ? void 0 : partEffBtn.addEventListener('click', function (e) {
        var canvas = document.querySelector('#canvas');
        // Typescript 의 Null 반환을 위해 사용 ( 옵셔널 체이닝 미 사용 )
        if (!canvas) {
            return;
        }
        var ctx = canvas.getContext('2d');
        var canvasHei;
        var canvasWid;
        var bgColor = '#ff6138';
        var animation = [];
        ;
        var numb = Math.floor(Math.random() * 20);
        var circles = [];
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        canvas.addEventListener('click', function (e) {
            circles.push({ radius: 50, color: [r, g, b] });
        });
    });
    // Click To Open Big Circle
    var circle = queryElement('.subCircle');
    // 옵셔널 체이닝 사용
    circle === null || circle === void 0 ? void 0 : circle.addEventListener('click', function (e) {
    });
    // BlackPage Text Type Image Animation
    var hambuger = queryElement('.hambuger');
    hambuger === null || hambuger === void 0 ? void 0 : hambuger.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
        var imgViewer, imgWrap, imgWrapWidth, imgEle, mainTxt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imgViewer = queryElement('.imgViewer');
                    imgWrap = queryElement('.imgViewer > ul');
                    imgWrapWidth = window.getComputedStyle(imgWrap).width;
                    imgEle = Array.from(queryElement('.imgViewer').querySelectorAll('li'));
                    mainTxt = Array.from(queryElement('.blackPager > ul').querySelectorAll('a'));
                    return [4 /*yield*/, delay(3500)];
                case 1:
                    _a.sent();
                    mainTxt.forEach(function (el, idx) {
                        el.addEventListener('mouseenter', function (e) {
                            // 해당 인덱스 별 이미지 변환 효과
                            mainTxt[idx];
                        });
                        el.addEventListener('mouseleave', function (e) {
                            mainTxt[idx];
                        });
                    });
                    imgViewer.style.width = imgWrapWidth;
                    console.log(imgViewer, imgWrap, imgEle);
                    console.log('Text Slide Effect End !');
                    return [2 /*return*/];
            }
        });
    }); });
    // Scroll Anime
    window.addEventListener('scroll', function (e) {
        var currTop = window.scrollY;
    });
    // Translate Full Page
    var changeBtn = queryElement('.screenChange');
    var body = queryElement('body');
    var animate = false;
    changeBtn.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body.classList.add('curtain');
                    if (!!animate) return [3 /*break*/, 2];
                    animate = true;
                    body.classList.add('curtain');
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    body.classList.remove('curtain');
                    body.classList.toggle('fullPage');
                    animate = false;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
    // Mouse Wheel Event
    window.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            var scroll = window.innerHeight;
            window.scrollTo({
                top: scroll,
                behavior: "smooth"
            });
        }
        else {
        }
    });
    // FullPage Setting
    var contentLeng = Array.from(document.querySelectorAll('.fullContainer > .content'));
    contentLeng.forEach(function (el) {
        var dot = document.createElement('div');
        var dotCont = document.querySelector('.dotCont');
        var scroll = window.scrollY;
        dot.className = 'dot';
        dotCont === null || dotCont === void 0 ? void 0 : dotCont.appendChild(dot);
        dot === null || dot === void 0 ? void 0 : dot.addEventListener('click', function (e) {
            console.log(dot);
        });
    });
    // Default Canvas Circle Wave
    var canvas = document.querySelector('#circleWave');
    var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    var canvasHei;
    var canvasWid;
    var bgColor;
    var animations = []; // Animation이라는 타입은 가정입니다. 실제 타입으로 바꿔주세요.
    var circles = []; // Circle이라는 타입은 가정입니다. 실제 타입으로 바꿔주세요.
    var rdNum = Math.floor(Math.random() * 255);
    var colorPicker = (function () {
        var colors = [rdNum, rdNum, rdNum];
        var idx = 0;
        function next() {
            idx = idx++ < colors.length - 1 ? idx : 0;
            return colors[idx];
        }
        function current() {
            return colors[idx];
        }
        return {
            next: next,
            current: current
        };
    })();
    function removeAnimation(animation) {
        var idx = animations.indexOf(animation);
        if (idx > -1) {
            animations.splice(idx, 1);
        }
    }
    function calcPageFillRadius(x, y) {
        var wd = Math.max(x - 0, canvasWid - x);
        var hi = Math.max(y - 0, canvasHei - y);
        return Math.sqrt(Math.pow(wd, 2) + Math.pow(hi, 2));
    }
    function addClickListeners() {
        document.addEventListener('touchstart', handleEvent);
        document.addEventListener('mousedown', handleEvent);
    }
    function handleEvent(e) {
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR;
        var rippleSize = Math.min(200, (canvasWid * .4));
        var minCoverDuration = 750;
        if ('touches' in e) {
            e.preventDefault();
            var touchEvent = e.touches[0];
            targetR = calcPageFillRadius(touchEvent.clientX, touchEvent.clientY);
        }
        else {
            targetR = calcPageFillRadius(e.pageX, e.pageY);
            var pageFill = new Circle({
                x: e.pageX,
                y: e.pageY,
                r: 0,
                fill: nextColor
            });
        }
    }
});
