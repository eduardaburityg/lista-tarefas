const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));

if (isNaN(numero) || numero < 0) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(` O fatorial de ${numero} é: ${fatorial}`);
}
