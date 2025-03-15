function convertTemperature() {
    let temp = parseFloat(document.getElementById('inputTemp').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let convertedTemp;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }

    if (fromUnit === toUnit) {
        convertedTemp = temp;
    } else if (fromUnit === "C" && toUnit === "F") {
        convertedTemp = (temp * 9/5) + 32;
    } else if (fromUnit === "C" && toUnit === "K") {
        convertedTemp = temp + 273.15;
    } else if (fromUnit === "F" && toUnit === "C") {
        convertedTemp = (temp - 32) * 5/9;
    } else if (fromUnit === "F" && toUnit === "K") {
        convertedTemp = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "K" && toUnit === "C") {
        convertedTemp = temp - 273.15;
    } else if (fromUnit === "K" && toUnit === "F") {
        convertedTemp = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)} °${toUnit}`;
}