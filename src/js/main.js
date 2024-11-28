const openNavbarBtn = document.querySelector('.open-navbar');
const closeNavbarBtn = document.querySelector('.close-navbar');
const navbarMobile = document.querySelector('.navbar-mobile');

function navbarToggler() {
    navbarMobile.classList.toggle('open');
}

if (openNavbarBtn) {
    openNavbarBtn.addEventListener('click', navbarToggler)
}

if (closeNavbarBtn) {
    closeNavbarBtn.addEventListener('click', navbarToggler)
}


// trusted by slider
const trustedBy = new Swiper(".trusted-by-slider", {
    slidesPerView: 7,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    loopAdditionalSlides: 7,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 2000,
    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 7,
        },
        1536:{
            slidesPerView: 9,
        }
    },
});

// popular databases
const popularDatabases = new Swiper(".popular-databases", {
    slidesPerView: 7,
    spaceBetween: 80,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
    },
    speed: 2000,
    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 7,
        },
    },
});

// feedback
const feedback = new Swiper(".insights", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

// Bio accordion
const faq = document.querySelectorAll(".faq");
if (faq) {
    faq.forEach(function (faqButton) {
        const btn = faqButton.querySelector(".faq-btn");

        btn.addEventListener("click", function () {
            faq.forEach(function (item) {
                if (item !== faqButton) {
                    item.classList.remove("show-content");
                }
            });

            faqButton.classList.toggle("show-content");
        });
    });
}

// Setup
const timelineLine = document.querySelector('.fill-line');
const icons = document.querySelectorAll('.fill-icon');
const timelineSection = document.querySelector('.fill-section');

if (timelineSection) {
    window.addEventListener('scroll', () => {
        const sectionTop = timelineSection.offsetTop;
        const sectionHeight = timelineSection.clientHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
            const scrollPositionInSection = scrollTop + windowHeight - sectionTop;
            const fillHeight = (scrollPositionInSection / sectionHeight) * sectionHeight;

            timelineLine.style.height = `${Math.min(fillHeight, sectionHeight)}px`;

            icons.forEach((icon, index) => {
                const iconPosition = icon.getBoundingClientRect().top;
                if (iconPosition < windowHeight / 2) {
                    icon.classList.add('active');
                } else {
                    icon.classList.remove('active');
                }
            });
        }
    });
}

// play video when user scrolls into its respective section
document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth >= 768) {
        let videoSections = document.querySelectorAll('.video-section');
        let observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.65
        };

        let observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                let video = entry.target.querySelector('video');
                if (entry.isIntersecting) {
                    video.play();
                    video.onended = function () {
                        observer.unobserve(entry.target);
                    };
                } else {
                    video.pause();
                }
            });
        }, observerOptions);

        videoSections.forEach(function (section) {
            observer.observe(section);
        });
    } else {
        const videos = document.querySelectorAll('video')
        videos.forEach(video => {

            if (video.isIntersecting) {
                video.play()
            }
        })

        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play()
                } else {
                    entry.target.pause()
                }
            })
        }, { /* options */ })

        videos.forEach(video => observer.observe(video))
    }
});

// Technical and non-technical buttons
const technicalBtn = document.querySelector('.technical-btn');
const nonTechnicalBtn = document.querySelector('.non-technical-btn');
const technicalContent = document.querySelector('.technical-content');
const nonTechnicalContent = document.querySelector('.non-technical-content');

if (technicalBtn) {
    technicalBtn.addEventListener('click', function () {
        technicalBtn.classList.add('active');
        nonTechnicalBtn.classList.remove('active');
        technicalContent.classList.add('active');
        nonTechnicalContent.classList.remove('active');
    });
}

if (nonTechnicalBtn) {
    nonTechnicalBtn.addEventListener('click', function () {
        nonTechnicalBtn.classList.add('active');
        technicalBtn.classList.remove('active');
        nonTechnicalContent.classList.add('active');
        technicalContent.classList.remove('active');
    });
}


const buttons = document.querySelectorAll('.hero-btn');

if (buttons) {
    const sliderBackground = document.querySelector('.slider-background');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const buttonWidth = button.offsetWidth;
            const newPosition = index * (buttonWidth);
            sliderBackground.style.transform = `translateX(${newPosition}px)`;
        });
    });

}

// copyright current year
const currYear = document.querySelector('.current-year');
if(currYear){
    currYear.textContent = new Date().getFullYear()
}

// remove video poster once video is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll('video');

    if (window.innerWidth >= 768) {
        videos.forEach(function (video) {
            video.addEventListener('loadeddata', function () {
                if (video.readyState >= 3) {
                    video.removeAttribute('poster');
                }
            });
        });
    }
});