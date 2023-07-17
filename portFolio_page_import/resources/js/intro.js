window.addEventListener('load' , () => {
    setTimeout(() => {
        let loadingScreen = document.querySelector('.loadingPage') ;
        if (loadingScreen) {
            loadingScreen.remove();
            document.querySelector('html').style.overflow = 'auto';
        } else {
            alert('Loading screen does not exist.');
        }
    } , 2000)
})

