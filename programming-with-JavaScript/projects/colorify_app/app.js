const colors = {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF0000",
    green: "#008000",
    blue: "#0000FF",
    yellow: "#FFFF00",
    orange: "#FFA500",
    purple: "#800080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    gray: "#808080",
    lightGray: "#D3D3D3",
    darkGray: "#A9A9A9",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    lime: "#00FF00",
    indigo: "#4B0082",
    teal: "#008080",
    olive: "#808000",
    maroon: "#800000",
    gold: "#FFD700",
    silver: "#C0C0C0",
    ivory: "#FFFFF0",
    beige: "#F5F5DC",
    lavender: "#E6E6FA",
    mint: "#98FF98",
    peach: "#FFDAB9",
    skyBlue: "#87CEEB",
    coral: "#FF7F50",
    salmon: "#FA8072"
};

const circleEl = document.querySelector('.circle');
const buttonEl = document.querySelector('button');

const changeColor = () => {
    // Get the keys
    const colorKeys = Object.keys(colors);
    // Random color name
    const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    // Get the hex code
    const randomColorHex = colors[randomKey];
    // Apply the color to the circleEl
    circleEl.style.backgroundColor = randomColorHex;
}

buttonEl.addEventListener('click', changeColor);