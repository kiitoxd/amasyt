(function() {
    const container = document.getElementById('falling-stars-container');
    const colors = ['white', '#ffffe0', '#add8e6'];
    const sizes = ['small', 'medium', 'large'];

    function createComet() {
        const comet = document.createElement('div');
        comet.classList.add('falling-comet');
        const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
        comet.classList.add(sizeClass);
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        comet.classList.add(
            colorClass === 'white' ? 'white' :
            colorClass === '#ffffe0' ? 'yellow' : 'blue'
        );
        comet.style.boxShadow = 'none';
        comet.style.left = `${Math.random() * 100}vw`;
        comet.style.top = `${Math.random() * 10}vh`;
        const duration = Math.random() * 2 + 1;
        comet.style.animationDuration = `${duration}s`;
        container.appendChild(comet);
        comet.addEventListener('animationend', () => {
            comet.remove();
        });
    }

    setInterval(createComet, 400);
})();