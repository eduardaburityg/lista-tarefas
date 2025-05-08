const prompt = require('prompt-sync')();

const nota = parseFloat(prompt("Digite a sua nota: "));

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Por favor, digite uma nota válida entre 0 e 10.");
} else if (nota <= 4) {
  console.log("Você está REPROVADO.");
} else if (nota > 4 && nota < 7) {
  console.log("Você está em RECUPERAÇÃO.");
} else if (nota === 10) {
  console.log("Parabéns pela sua nota! 🎉 Você está APROVADO!");
} else {
  console.log("Você está APROVADO!");
}