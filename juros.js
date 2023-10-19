function jurosCompostos(montantePrincipal, taxaJurosAnual, períodos) {
  const taxaJurosMensal = taxaJurosAnual / 12 / 100; // Taxa de juros mensal
  const valorFuturo = montantePrincipal * Math.pow(1 + taxaJurosMensal, períodos);

  return valorFuturo;
}

module.exports = jurosCompostos;
