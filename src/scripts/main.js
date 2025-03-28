document.addEventListener('DOMContentLoaded', () => {
    const paletteContainer = document.getElementById('color-palette');
    const generateButton = document.getElementById('generate-palette');

    const generateRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    };

    const createColorBox = (color) => {
        const container = document.createElement('div');
        container.className = 'color-box';
        container.style.backgroundColor = color;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.textContent = color;

        container.appendChild(overlay);
        return container;
    };

    const generatePalette = () => {
        paletteContainer.innerHTML = ''; 
        for (let i = 0; i < 5; i++) {
            const color = generateRandomColor();
            paletteContainer.appendChild(createColorBox(color));
        }
    };

    generateButton.addEventListener('click', generatePalette);

    generatePalette();
});