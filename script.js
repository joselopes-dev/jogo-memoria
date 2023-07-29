// script.js

const redSlider = document.getElementById("red-slider");
const greenSlider = document.getElementById("green-slider");
const blueSlider = document.getElementById("blue-slider");
const resultColor = document.querySelector(".result-color");
const redPercentage = document.getElementById("red-percentage");
const greenPercentage = document.getElementById("green-percentage");
const bluePercentage = document.getElementById("blue-percentage");


function updateResultColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  resultColor.style.backgroundColor = color;

  // Calcular as porcentagens
  const total = parseInt(redSlider.max);
  const redPercent = ((redValue / total) * 100).toFixed(1);
  const greenPercent = ((greenValue / total) * 100).toFixed(1);
  const bluePercent = ((blueValue / total) * 100).toFixed(1);

  // Exibir as porcentagens
  redPercentage.textContent = redPercent + "%";
  greenPercentage.textContent = greenPercent + "%";
  bluePercentage.textContent = bluePercent + "%";
}

redSlider.addEventListener("input", updateResultColor);
greenSlider.addEventListener("input", updateResultColor);
blueSlider.addEventListener("input", updateResultColor);

// Atualize a cor resultante e as porcentagens quando a página carregar
window.addEventListener("load", updateResultColor);