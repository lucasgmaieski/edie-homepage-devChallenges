function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/images/close.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/images/menu.png";
    }
}

function changedSize() {
    let menuMobile = document.querySelector('.menu');
    if (window.innerWidth <= 630) {
        menuMobile.classList.add('open');
    } else {
        menuMobile.classList.remove('open');
    }
}