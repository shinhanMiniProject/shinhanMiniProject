window.addEventListener('scroll', function() {
    const element = document.querySelector('.line');
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate');
    }
});