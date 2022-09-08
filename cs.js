const slides = document.getElementsByClassName('Flower-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('Flower-next').addEventListener('click', moveToNextSlide);
document.getElementById('Flower-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('Flower-item-visible');
        slide.classList.add('Flower-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("Flower-item-visible"); 
}

function moveToPrevSlide() {
        hideAllSlides();

        if ( slidePosition ===0) {
            slidePosition = totalSlides -1;
        } else {
            slidePosition--;
        }
        slides[slidePosition].classList.add("Flower-item-visible");
}