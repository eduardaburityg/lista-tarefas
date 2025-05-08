// Tarefa 1: Verifica se um número é par ou ímpar
const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
  console.log("Por favor, digite um número válido.");
} else if (numero % 2 === 0) {
  console.log(`O número ${numero} é PAR.`);
} else {
  console.log(`O número ${numero} é ÍMPAR.`);
}