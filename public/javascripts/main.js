$(document).ready(function(){
    const slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: 0,
        delay: 0,
        duration: 2000,
        interval: 1000,
        viewOffset: {
            bottom: 100
        }
    };

    const slideRight = {
        distance: '150%',
        origin: 'right',
        opacity: 1,
        delay: 0,
        duration: 2000,
        interval: 500,
    }

    ScrollReveal().reveal('.slide-right', slideRight);
    ScrollReveal().reveal('.slide-up', slideUp);
});