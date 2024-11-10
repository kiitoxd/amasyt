// Falling Stars Animation JavaScript

(function() {
    const container = document.getElementById('falling-stars-container');

    // Comet colors resembling shooting stars
    const colors = ['white', '#ffffe0', '#add8e6']; // White, Light Yellow, Light Blue

    // Comet sizes
    const sizes = ['small', 'medium', 'large'];

    // Function to create a single comet
    function createComet() {
        const comet = document.createElement('div');
        comet.classList.add('falling-comet');

        // Random size
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        comet.classList.add(sizeClass);

        // Random color
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        comet.classList.add(
            colorClass === 'white' ? 'white' :
            colorClass === '#ffffe0' ? 'yellow' : 'blue'
        );

        // Explicitly remove any box-shadow
        comet.style.boxShadow = 'none';

        // Random starting horizontal position
        comet.style.left = `${Math.random() * 100}vw`;

        // Start near the top (0vh to 10vh)
        comet.style.top = `${Math.random() * 10}vh`;

        // Random animation duration between 1s and 3s for faster comets
        const duration = Math.random() * 2 + 1; // 1s to 3s
        comet.style.animationDuration = `${duration}s`;

        // Append the comet to the container
        container.appendChild(comet);

        // Remove the comet after animation ends
        comet.addEventListener('animationend', () => {
            comet.remove();
        });
    }

    // Generate comets at regular intervals
    setInterval(createComet, 400); // Increased frequency for more comets
})();

