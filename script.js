const carouselImage = document.getElementById('carouselImage');

// Array of image paths from the local "images" directory
const slides = [
    "images/sneaker0.jpg",
    "images/sneaker1.jpeg",
    "images/sneaker3.jpg",
    "images/sneaker5.jpg",
    "images/sneaker6.jpeg",
    "images/sneaker7.jpeg"
];

let index = 0;

// Function to change the slide content with fade and scale animation
function changeSlide(direction) {
    // Step 1: Add the fade-out class to trigger animation
    carouselImage.classList.add('fade-out');

    // Step 2: Wait for the fade-out animation to complete
    setTimeout(() => {
        // Update the index based on the direction
        if (direction === 'next') {
            index = (index + 1) % slides.length; // Move to the next slide, loop back if at the end
        } else if (direction === 'prev') {
            index = (index - 1 + slides.length) % slides.length; // Move to the previous slide, loop back if at the beginning
        }

        // Step 3: Update the image src of the carousel
       

        // Step 4: After changing the image, remove the fade-out class
        // and add the fade-in class to trigger the fade-in animation
        setTimeout(() => {
            carouselImage.classList.remove('fade-out');
            carouselImage.src = slides[index];
            carouselImage.classList.add('fade-in');
        }, 300); // A small timeout to allow the fade-out to complete

    }, 600); // This duration should match the CSS transition duration for the fade-out effect

    // Step 5: Remove the fade-in class after the animation completes to allow for the next cycle
    setTimeout(() => {
        carouselImage.classList.remove('fade-in');
    }, 300); // This duration should match the total time for fade-in
}

// Event listeners for buttons
document.getElementById('next').addEventListener('click', () => {
    changeSlide('next');
});

document.getElementById('fought').addEventListener('click', () => {
    changeSlide('prev');
});
