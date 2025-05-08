const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) {
  const numero = parseFloat(prompt("Digite um número (0 para parar): "));

  if (numero === 0) break;

  if (isNaN(numero)) {
    console.log("❌ Valor inválido, tente novamente.");
  } else {
    soma += numero;
    contador++;
  }
}

if (contador === 0) {
  console.log("⚠️ Nenhum número válido foi digitado.");
} else {
  const media = soma / contador;
  console.log(`📊 A média dos ${contador} números é: ${media.toFixed(2)}`);
}
