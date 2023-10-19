import verificarParenteses from "./parenteses";

describe('Teste para verificarParênteses', () => {
  test('Sequência válida deve retornar true', () => {
    expect(verificarParenteses('()')).toBe(true);
    expect(verificarParenteses('(())')).toBe(true);
    expect(verificarParenteses('(()())')).toBe(true);
  });

  test('Sequência inválida deve retornar false', () => {
    expect(verificarParenteses(')')).toBe(false);
    expect(verificarParenteses('(()))')).toBe(false);
    expect(verificarParenteses('()())(')).toBe(false);
  });
});
