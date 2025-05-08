const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Digite seu peso (em kg): "));
const altura = parseFloat(prompt("Digite sua altura (em metros): "));

// Verifica se os valores são válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Por favor, insira valores válidos para peso e altura.");
} else {
  // Cálculo do IMC
  const imc = peso / (altura * altura);
  console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);

  // Classificação
  if (imc < 18.5) {
    console.log("Classificação: Baixo peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Classificação: Peso normal");
  } else if (imc >= 25 && imc <= 29.9) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }
}
