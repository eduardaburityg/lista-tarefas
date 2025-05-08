//Verifica a classificação de idade
const prompt = require('prompt-sync')();

const idade = parseInt(prompt("Digite a sua idade: "));

if (isNaN(idade)) {
  console.log("Por favor, digite uma idade válida.");
} else if (idade >= 0 && idade <= 12) {
  console.log("Você é uma CRIANÇA.");
} else if (idade >= 13 && idade <= 17) {
  console.log("Você é um ADOLESCENTE.");
} else if (idade >= 18 && idade <= 59) {
  console.log("Você é um ADULTO.");
} else if (idade >= 60) {
  console.log("Você é um IDOSO.");
} else {
  console.log("Idade inválida.");
}