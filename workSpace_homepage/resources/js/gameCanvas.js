// setting game or canvas
// Class Ver
export class game {
    constructor () {
        console.log('Export Comp!')
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
    keyDownHandler(event) {
        // 키 다운 이벤트 처리 로직
      }

    keyUpHandler(event) {
        // 키 업 이벤트 처리 로직
    }

}

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