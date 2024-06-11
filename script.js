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
let currentIndex = 1;
const coupons = document.querySelector('.coupons');
const totalCoupons = document.querySelectorAll('.coupon').length;

// Clone the first few coupons and append them to the end
for (let i = 0; i < getVisibleCoupons(); i++) {
    const clone = document.querySelectorAll('.coupon')[i].cloneNode(true);
    coupons.appendChild(clone);
}

function getVisibleCoupons() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 480) {
        return 1;
    } else if (screenWidth < 768) {
        return 2;
    } else if (screenWidth < 786) {
        return 2; // 2.5 cards initially
    } else {
        return 2.5; // 2.5 cards initially
    }
}

function showNextCoupon() {
    const visibleCoupons = getVisibleCoupons();
    const couponWidth = document.querySelector('.coupon').clientWidth + 10; // Coupon width including gap
    currentIndex++;
    coupons.style.transition = 'transform 0.5s ease-in-out';
    coupons.style.transform = `translateX(-${currentIndex * couponWidth}px)`;

    // Reset to the beginning without transition
    if (currentIndex >= totalCoupons) {
        setTimeout(() => {
            coupons.style.transition = 'none';
            currentIndex = 1;
            coupons.style.transform = `translateX(-${currentIndex * couponWidth}px)`;
        }, 500); // Match this delay to the transition duration
    }
}

setInterval(showNextCoupon, 3000);

function adjustInitialTransform() {
    const visibleCoupons = getVisibleCoupons();
    const initialCouponWidth = document.querySelector('.coupon').clientWidth + 10;
    coupons.style.transform = `translateX(-${currentIndex * initialCouponWidth}px)`;
}

// Adjust the initial transform on load
adjustInitialTransform();

// Adjust the transform on window resize
window.addEventListener('resize', adjustInitialTransform);



// Testimonial

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




  
  
  
  







