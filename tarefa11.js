const prompt = require('prompt-sync')();

let soma = 0;

console.log("Digite 5 números para somar:");

for (let i = 1; i <= 5; i++) {
  const numero = parseFloat(prompt(`Digite o ${i}º número: `));

  if (isNaN(numero)) {
    console.log("Número inválido! Tente novamente.");
    i--; // repete a rodada atual
  } else {
    soma += numero;
  }
}

console.log(`🔢 A soma total dos 5 números é: ${soma}`);
