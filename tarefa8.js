const prompt = require('prompt-sync')();

// Entrada de dados
const valor1 = parseFloat(prompt("Digite o primeiro valor: "));
const valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));

// Verificação se os valores são válidos
if (isNaN(valor1) || isNaN(valor2)) {
  console.log("Por favor, digite apenas números válidos.");
} else if (valor1 === valor2) {
  console.log("Os valores não podem ser iguais.");
} else {
  // Mostrar os valores em ordem crescente
  if (valor1 < valor2) {
    console.log(`🔢 Ordem crescente: ${valor1}, ${valor2}`);
  } else {
    console.log(`🔢 Ordem crescente: ${valor2}, ${valor1}`);
  }
}
