const prompt = require('prompt-sync')();

// Entrada de dados
const A = parseFloat(prompt("Digite o valor do lado A: "));
const B = parseFloat(prompt("Digite o valor do lado B: "));
const C = parseFloat(prompt("Digite o valor do lado C: "));

// Verificar se os lados são válidos (números positivos)
if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
  console.log("Por favor, insira apenas valores positivos e válidos.");
} 
// Verificar se forma um triângulo
else if (A < B + C && B < A + C && C < A + B) {
  console.log("Os lados formam um triângulo.");

  // Verificar o tipo
  if (A === B && B === C) {
    console.log("Tipo de triângulo: EQUILÁTERO (todos os lados iguais)");
  } else if (A === B || A === C || B === C) {
    console.log("Tipo de triângulo: ISÓSCELES (dois lados iguais)");
  } else {
    console.log("Tipo de triângulo: ESCALENO (todos os lados diferentes)");
  }

} else {
  console.log("❌ Os lados NÃO formam um triângulo.");
}
