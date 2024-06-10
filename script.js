// Pizza
document.addEventListener('scroll', function() {
    const image = document.getElementById('rotating-image');
    const scrollPosition = window.scrollY;
    const rotationDegree = scrollPosition % 360;
    image.style.transform = `rotate(${rotationDegree}deg)`;
});

// Flag
$(document).ready(function(){
    $('.slick-track').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024, // For screens less than 1024px wide
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For screens less than 768px wide
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // For screens less than 480px wide
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

// Coupon card
let currentIndex = 1; // Initializing currentIndex
const slides = document.querySelector('.slides'); // Selecting slides container
const totalSlides = document.querySelectorAll('.slide').length; // Getting total number of slides

function showNextSlide() {
    const slideWidth = document.querySelector('.slide').clientWidth + 10; // Slide width including gap
    currentIndex++;
    if (currentIndex >= totalSlides - 4) { // Adjusted to account for the visible slides and one duplicated slide
        slides.style.transition = 'transform 0.5s ease-in-out'; // Adding transition
        currentIndex = 1; // Resetting currentIndex
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Moving to the first slide
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out'; // Adding transition
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Moving to the next slide
    }
}

setInterval(showNextSlide, 3000); // Automatically changing slide every 3 seconds

// Adjust the initial transform to show the first image correctly
const initialSlideWidth = document.querySelector('.slide').clientWidth + 10; // Getting initial slide width
slides.style.transform = `translateX(-${currentIndex * initialSlideWidth}px)`; // Setting initial transform


// feedback

$(document).ready(function(){
    $('.quotes').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
});




  
  
  
  







