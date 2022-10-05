function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/images/xmark-solid.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/images/bars-solid.svg";
    }
}