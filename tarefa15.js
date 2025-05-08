console.log("Primeiros 10 números da sequência de Fibonacci:");

let anterior = 0;
let atual = 1;

for (let i = 1; i <= 10; i++) {
  console.log(`${i}º → ${anterior}`);
  const proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}
