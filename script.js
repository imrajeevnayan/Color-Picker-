const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorBox = document.getElementById("color-box");
const hexCodeInput = document.getElementById("hexCode");

redInput.addEventListener("input", updateColor);
greenInput.addEventListener("input", updateColor);
blueInput.addEventListener("input", updateColor);

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    const hexCode = rgbToHex(redValue, greenValue, blueValue);
    hexCodeInput.value = hexCode;

    colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function rgbToHex(r, g, b) {
    const toHex = (value) => {
        const hex = Number(value).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
