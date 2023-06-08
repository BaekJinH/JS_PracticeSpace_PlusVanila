export class prac {
    constructor ( x, y ) {
        this.canvas = document.querySelector('#pracCanvas') ;
        this.ctx = this.canvas.getContext('2d') ;
        this.canvas.width = window.innerWidth ;
        this.canvas.height = window.innerHeight ;
    }
}
export class line extends prac {

}
export class fill extends prac {

}