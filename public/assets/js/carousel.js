const photoWrapper = document.getElementById("photoWrapper");
const photos = Array.from(photoWrapper.querySelectorAll(".photo"));
const photoWidth = photos[0].offsetWidth; // Assuming all photos have the same width

// Clone the photos for repeating
const clonedPhotos = photos.map(photo => {
  const clone = photo.cloneNode(true);
  photoWrapper.appendChild(clone);
  return clone;
});

// Function to perform infinite smooth scrolling
let isScrolling = true; // Flag to track scrolling state
let animationId; // Variable to store the animation ID for pausing/resuming

function infiniteScroll() {
  if (isScrolling && photoWrapper.scrollLeft >= photoWrapper.scrollWidth / 2) {
    photoWrapper.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
    // Reset flag and animation frame when scrolling resets
    isScrolling = true;
    animationId = requestAnimationFrame(infiniteScroll);
  } else if (isScrolling) {
    photoWrapper.scrollLeft += 1; // Increment by 1 for smooth scrolling
    animationId = requestAnimationFrame(infiniteScroll);
  }
}

// Start infinite scrolling
infiniteScroll();

// Stop scrolling on mouseover
photoWrapper.addEventListener("mouseover", () => {
  isScrolling = false; // Set flag to stop scrolling
  cancelAnimationFrame(animationId); // Cancel any ongoing animation
});

// Resume scrolling on mouseout
photoWrapper.addEventListener("mouseout", () => {
  isScrolling = true; // Set flag to resume scrolling
  animationId = requestAnimationFrame(infiniteScroll); // Start the scrolling animation again
});


