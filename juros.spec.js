const jurosCompostos = require('./juros');

describe('Teste para jurosCompostos', () => {
  test('Deve calcular o valor futuro corretamente', () => {
    // Valor principal: $1000, Taxa de juros anual: 5%, Períodos: 3 anos
    expect(jurosCompostos(1000, 5, 3)).toBeCloseTo(1012.55, 2);

    // Valor principal: $5000, Taxa de juros anual: 3.5%, Períodos: 7 anos
    expect(jurosCompostos(5000, 3.5, 7)).toBeCloseTo(5102.98, 2);
  });

  test.failing('Deve lançar um erro ao dividir por zero', () => {
    // Valor principal: $2000, Taxa de juros anual: 0%, Períodos: 5 anos
    expect(() => {
      jurosCompostos(2000, 0, 5);
    }).toThrow('Divisão por zero não é permitida.');
  });
});
