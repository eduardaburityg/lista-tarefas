const prompt = require('prompt-sync')();

let continuar = true;

while (continuar) {
  console.log("=== MENU INTERATIVO ===");
  console.log("1 - Calcular o dobro de um número");
  console.log("2 - Mostrar data e hora atual");
  console.log("3 - Verificar se um número é par ou ímpar");
  console.log("0 - Sair");

  const opcao = parseInt(prompt("Escolha uma opção (0 a 3): "));

  switch (opcao) {
    case 1:
      const numeroDobro = parseFloat(prompt("Digite um número: "));
      if (isNaN(numeroDobro)) {
        console.log("Número inválido.");
      } else {
        console.log(`O dobro de ${numeroDobro} é ${numeroDobro * 2}`);
      }
      break;
    
    case 2:
      const agora = new Date();
      console.log(`Data e hora atual: ${agora.toLocaleString()}`);
      break;

    case 3:
      const numero = parseInt(prompt("Digite um número inteiro: "));
      if (isNaN(numero)) {
        console.log("Número inválido.");
      } else if (numero % 2 === 0) {
        console.log(`✅ O número ${numero} é PAR.`);
      } else {
        console.log(`✅ O número ${numero} é ÍMPAR.`);
      }
      break;

    case 0:
      console.log("👋 Saindo do programa. Até logo!");
      continuar = false;
      break;

    default:
      console.log("⚠️ Opção inválida! Digite um número entre 0 e 3.");
  }
}
