const hiddenText = document.getElementById('hidden-text');
const radius = 120; // Radius of the spotlight

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    hiddenText.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
});