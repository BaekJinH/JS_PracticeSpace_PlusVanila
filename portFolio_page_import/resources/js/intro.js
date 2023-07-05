window.addEventListener('load' , () => {
    setTimeout(() => {
        let loadingScreen = document.querySelector('.loadingPage') ;
        if (loadingScreen) {
            loadingScreen.remove();
        } else {
            alert('Loading screen does not exist.');
        }
    } , 2000)
})



// (function createLoadingScreen() {
//     let loadingScreen = document.createElement('div');
//     loadingScreen.className = 'load';

//     loadingScreen.innerHTML = `
//         <div class='introText'>감사합니다.</div>
//     `;

//     document.body.appendChild(loadingScreen);
// })();