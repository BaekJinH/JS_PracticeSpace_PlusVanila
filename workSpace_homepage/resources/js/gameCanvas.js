// setting game or canvas
// Class Ver
export class game {
    constructor () {
        this.gmCanvas = document.querySelector('#gameCanvas');
        this.ctx = this.gmCanvas.getContext('2d');
        this.gmCanvas.width = window.innerWidth;
        this.gmCanvas.height = window.innerHeight;
        this.isDown = false;
        this.leftMove = false;
        this.rightMove = false;
        this.upMove = false;
        this.downMove = false;
        this.blockCode = [116, 17, 82] ;
        this.setupCanvas() ;
        document.addEventListener('keydown', this.keyDownHandler.bind(this));
        document.addEventListener('keyup', this.keyUpHandler.bind(this));

    }
    setupCanvas() {
        this.gmCanvas.width = window.innerWidth;
        this.gmCanvas.height = window.innerHeight;
    }


    keyDownHandler(event) {
        if ( this.blockCode.includes(event.keyCode) ) {
            event.preventDefault()
            // console.log(' 새로고침이 잠시 정지됩니다 ! ')

        }


        // console.log(event.keyCode , event.key)
    }


    keyUpHandler(event) {
        if ( this.blockCode.includes(event.keyCode) ) {
            event.preventDefault()
            // console.log(' 새로고침이 잠시 정지됩니다 ! ')

        }


        // console.log('Export Comp!')
    }
}

export class lougeLike extends game {
    constructor() {
        super();
        this.testHandler = this.test.bind(this);
        document.addEventListener('keydown', this.testHandler);
    }

    test(event) {
        console.log('aaa');
        super.keyDownHandler(event); // 부모 클래스의 keyDownHandler 호출
    }

    setupCanvas() {
        super.setupCanvas();
    }
}


class entity extends lougeLike {
    constructor(params) {

    }
}
class mons extends entity {
    constructor(params) {

    }
}
class player extends entity {
    constructor(params) {

    }
}


class weap extends lougeLike {

}
class _1 extends weap {

}
class _2 extends weap {

}


class map extends lougeLike {

}
class m_1 extends map {

}
class m_2 extends map {

}
class m_3 extends map {

}





export class puzzle extends game {
    constructor() {
        super();
    }

    setupCanvas() {
        super.setupCanvas();
    }
}


export class chess extends game {
    constructor() {
        super();

    }
    setupCanvas() {
        super.setupCanvas();
    }
}

// 아래는 인스턴스 생성

// new lougeLike(); // lougeLike 클래스의 인스턴스 생성 -> 인스턴스를 생성하지 않고 내보내려면 메인 파일에서 import할 때 loguelike를 game과 같이 넣어줘야 함
// new puzzle() ;
// new chess() ;




























// 아래는 class 사용하지 않은 것
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