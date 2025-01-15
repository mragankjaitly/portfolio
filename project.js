const container = document.getElementById('container');
const hiddenText = document.getElementById('hidden-text');
const radius = 120; // Spotlight radius

// Spotlight effect function
function spotlightEffect(event) {
    const x = event.clientX;
    const y = event.clientY;
    hiddenText.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
}

// Add spotlight effect
document.addEventListener('mousemove', spotlightEffect);

// Toggle container replacement and stop spotlight effect
container.addEventListener('click', () => {
    container.classList.toggle('hidden');

    // Fully reveal or hide hidden text
    hiddenText.style.clipPath = container.classList.contains('hidden')
        ? 'circle(100% at 50% 50%)'
        : 'circle(0% at 0 0)';

    // Stop spotlight effect on click
    if (container.classList.contains('hidden')) {
        document.removeEventListener('mousemove', spotlightEffect);
    } else {
        document.addEventListener('mousemove', spotlightEffect);
    }
});
