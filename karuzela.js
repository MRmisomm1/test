let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    console.log(`Showing slide ${currentIndex}`); 
}

function nextSlide() {
    showSlide(currentIndex + 1);
    console.log('Next slide'); 
}

function prevSlide() {
    showSlide(currentIndex - 1);
    console.log('Previous slide'); 
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});