window.addEventListener('DOMContentLoaded' , () => {

    function sclBall (e) {
        const variabList = {
            spinCc: document.querySelector('.fixSpinCc') ,
            scrollRecog: e.deltaY ,
            sclY: window.scrollY || document.documentElement.scrollTop,
        }


        if ( variabList.scrollRecog > 0 ) {
            scrollDown(variabList )
        }
        else {
            scrollUp(variabList )
        }

        if ( variabList.scrollRecog >= 200 ) {

        }

    } ;

    const scrollDown = function scrollDown(variabList) {
        variabList.spinCc.style.transform = 'scale(1) rotate(360deg) translateX(-100%)' ;
        variabList.spinCc.style.transition = 'all .5s' ;

        console.log(variabList.sclY)
    }
    const scrollUp = function scrollUp(variabList) {
        variabList.spinCc.style.transform = 'scale(1.5) rotate(360deg) translateX(100%)' ;

    }


    document.addEventListener('wheel' , sclBall)


})



// sclBall 안에 모든 걸 넣어놓고 관리 -> 사실 이게 괜찮아 보이기는 함 일단 메모
// window.addEventListener('DOMContentLoaded' , () => {
//     function sclBall (e) {
//         window.scrollTo ({
//             behavior: "smooth"
//         }) ;
//         let scrollRecog = e.deltaY ;
//         let sclY = window.scrollY || document.documentElement.scrollTop

//         const asd = "공통 변수"; // 공통으로 사용할 변수

//         const scrollDown = function scrollDown(e, sharedVar) {
//             console.log(sharedVar);
//         }
//         const scrollUp = function scrollUp(e, sharedVar) {
//             console.log(sharedVar);
//         }

//         if ( scrollRecog > 0 ) {
//             scrollDown(e, asd)
//         }
//         else {
//             scrollUp(e, asd)
//         }
//     } ;

//     document.addEventListener('wheel' , sclBall)
// })
