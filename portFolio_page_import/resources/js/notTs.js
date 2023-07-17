window.addEventListener('DOMContentLoaded' , () => {
    function sclBall (e) {
        window.scrollTo ({
            behavior: "smooth"
        }) ;
        let scrollRecog = e.deltaY ;
        let sclY = window.scrollY || document.documentElement.scrollTop

        if ( scrollRecog > 0 ) {
            scrollDown()
        }
        else {
            scrollUp()
        }
    } ;

    function scrollDown() {

    }
    function scrollUp() {

    }



    document.addEventListener('mousewheel' , sclBall)
})