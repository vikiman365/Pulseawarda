const updates = [
    {
        subtitle: 'Discover your place',
        title: 'Explore The <br> Best <b>Beautiful <br> Beaches</b>',
        imgUrl: './images.jpeg',
        overlayImgUrl: './images (16).jpeg',
        objectPosition: '50%' // Example object position value for the first update
    },
    {
        subtitle: 'Discover your place',
        title: 'Explore The <br> Bet <b>Beautiful <br> Beaches</b>',
        imgUrl: './images18.jpeg',
        overlayImgUrl: './images.png',
        objectPosition: '50%' // Example object position value for the first update
    }
    // Add more updates as needed
];

const homeImgElement = document.querySelector('.home__img');
const homeDataSubtitleElement = document.querySelector('.home__data-subtitle');
const homeDataTitleElement = document.querySelector('.home__data-title');
const homeInfoOverlayParentElement = document.querySelector('.home__info');

let currentIndex = 0;

function updateContent() {
    const update = updates[currentIndex];

    // Smoothly transition the parent class
    homeInfoOverlayParentElement.style.opacity = 0;
    homeInfoOverlayParentElement.style.transition = 'opacity 0.5s ease'; // Transition with ease
    homeInfoOverlayParentElement.addEventListener('transitionend', function() {
        homeInfoOverlayParentElement.style.opacity = 1;
    }, { once: true });

    // Smoothly transition the image and content
    homeImgElement.style.opacity = 0;
    homeImgElement.style.transition = 'opacity 0.5s ease'; // Transition with ease
    homeImgElement.addEventListener('transitionend', function() {
        homeImgElement.src = update.imgUrl;
        homeImgElement.style.objectPosition = update.objectPosition; // Update object position
        homeDataSubtitleElement.textContent = update.subtitle;
        homeDataTitleElement.innerHTML = update.title;
        homeImgElement.style.opacity = 1;
    }, { once: true });

    // Update overlay image within its parent class
    const homeInfoImgElement = homeInfoOverlayParentElement.querySelector('.home__info-img');
    homeInfoImgElement.src = update.overlayImgUrl;
    homeInfoImgElement.alt = 'Overlay Image'; // Provide an appropriate alt text for accessibility

    // Update currentIndex for the next update
    currentIndex = (currentIndex + 1) % updates.length;
}

// Call the updateContent function immediately to start updates after loading
updateContent();

// Define a function to continuously update content with a constant delay
function continuousUpdate() {
    updateContent();
    setTimeout(continuousUpdate, 6000); // 6 seconds
}

// Start continuous updates
continuousUpdate();
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add 'animate' class to elements in viewport
  function animateOnScroll() {
    const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');
    scrollTriggerElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }

  // Add event listener for scroll to trigger animations
  window.addEventListener('scroll', animateOnScroll);

  // Trigger animations on page load
  animateOnScroll();