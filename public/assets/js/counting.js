// Total students joined our course
function animateCounter1() {
    const studentCount = document.querySelector('.studentcounter');
    if (!studentCount) return; // Exit if counter element not found
    const targetCount = parseInt(studentCount.textContent); // Convert string to number

    let currentCount = 0;
    const animationDuration = 2000; // Adjust duration in milliseconds (2 seconds here)
    const increment = Math.ceil(targetCount / (animationDuration / 16)); // Calculate increment per frame

    const intervalId = setInterval(() => {
      currentCount = Math.min(currentCount + increment, targetCount); // Ensure it doesn't exceed target
      studentCount.textContent = currentCount;

      if (currentCount === targetCount) {
        clearInterval(intervalId);
      }
    }, 16); // Interval for each animation frame (16ms for smooth animation)
  }

  // Call animateCounter1 function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function(event) {
    animateCounter1();
  });


// Total card holder students
  function animateCounter() {
    const studentCount = document.querySelector('.cardcounter');
    if (!studentCount) return; // Exit if counter element not found
    const targetCount = parseInt(studentCount.textContent); // Convert string to number

    let currentCount = 0;
    const animationDuration = 2000; // Adjust duration in milliseconds (2 seconds here)
    const increment = Math.ceil(targetCount / (animationDuration / 16)); // Calculate increment per frame

    const intervalId = setInterval(() => {
      currentCount = Math.min(currentCount + increment, targetCount); // Ensure it doesn't exceed target
      studentCount.textContent = currentCount;

      if (currentCount === targetCount) {
        clearInterval(intervalId);
      }
    }, 16); // Interval for each animation frame (16ms for smooth animation)
  }

  // Call animateCounter function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function(event) {
    animateCounter();
  });











// const studentCount = document.querySelector('.counter');
// const targetCount = parseInt(studentCount.textContent); // Convert string to number

// // Function to animate the counter
// function animateCounter() {
//   let currentCount = 0;
//   const animationDuration = 2000; // Adjust duration in milliseconds (2 seconds here)
//   const increment = Math.ceil(targetCount / (animationDuration / 16)); // Calculate increment per frame

//   const intervalId = setInterval(() => {
//     currentCount = Math.min(currentCount + increment, targetCount); // Ensure it doesn't exceed target
//     studentCount.textContent = currentCount;

//     if (currentCount === targetCount) {
//       clearInterval(intervalId);
//     }
//   }, 16); // Interval for each animation frame (16ms for smooth animation)
// }

// // Check if total_student is available before running animation
// if (studentCount && !isNaN(targetCount)) {
//   animateCounter();
// }
