const prompt = require('prompt-sync')();

// Entrada do usuário
const numero = parseInt(prompt("Digite um número inteiro: "));

// Verifica se é um número válido
if (isNaN(numero)) {
  console.log("❌ Por favor, digite um número inteiro válido.");
} else {
  console.log(`🔁 O número ${numero} será exibido 10 vezes:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${i}º → ${numero}`);
  }
}
