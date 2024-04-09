// Change footer color every 4 seconds
document.addEventListener('DOMContentLoaded', function() {
    setInterval(changeFooterColor, 4000);
});

function changeFooterColor() {
    const footer = document.querySelector('footer');
    const randomColor = getRandomColor();
    footer.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

