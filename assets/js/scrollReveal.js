/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: false
});

sr.reveal(`.home-data, .home-img,
        .about-data, .about-img,
        .services-content,
        .menu-content,
        .app-data, .app-img,
        .contact-data, .contact-button,
        .footer-content`, {
    interval: 300
})