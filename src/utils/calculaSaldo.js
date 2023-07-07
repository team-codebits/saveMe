export const calcularSomaValores = (extratos) => {
  let soma = 0;

  for (let i = 0; i < extratos.length; i++) {
    const extrato = extratos[i];
    if (extrato.valor) {
      const valor = parseFloat(extrato.valor);
      if (extrato.opcaoSelecionada === "despesa") {
        soma -= valor;
      } else {
        soma += valor;
      }
    }
  }

  return soma;
};
