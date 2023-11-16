document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
  
    function showImages() {
      imageContainers.forEach((container, index) => {
        setTimeout(() => {
          container.style.opacity = 1;
        }, index * 1000); // Adjust the delay between each image (in milliseconds)
      });
    }
  
    function hideImages() {
      imageContainers.forEach((container) => {
        container.style.opacity = 0;
      });
    }
  
    // Initial cycle
    showImages();
  
    // Set an interval for the continuous cycle
    setInterval(() => {
      hideImages();
      setTimeout(() => {
        showImages();
      }, 1000); // Adjust the delay before the next cycle (in milliseconds)
    }, 8000); // Adjust the total duration of each cycle (in milliseconds)
  });
  