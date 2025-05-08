const prompt = require('prompt-sync')();

// Entrada de dados
const quantidade = parseInt(prompt("Quantas maçãs você comprou? "));

// Verifica quantas maças foram compradas
if (isNaN(quantidade) || quantidade <= 0) {
  console.log("Por favor, digite um número válido de maçãs.");
} else {
  let preco;

  // Se comprou menos de 12
  if (quantidade < 12) {
    preco = 0.30;
  } else {
    // Se comprou 12 ou mais
    preco = 0.25;
  }

  const total = quantidade * preco;

  console.log(`Você comprou ${quantidade} maçã(s).`);
  console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`);
}