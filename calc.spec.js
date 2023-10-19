import { add, subtract, divide, multiply } from "./calc";

describe('funções math', () => {
  test('Soma de 2 e 3 deve ser igual a 5', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('Soma de qualquer valor não numérico retorna mensagem de erro', () => {
    expect(add(2, 'a')).toBe('Digite valores numéricos');
  });

  test('Subtração de 5 por 3 deve ser igual a 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('Multiplicação de 4 por 7 deve ser igual a 28', () => {
    expect(multiply(4, 7)).toBe(28);
  });

  test('Divisão de 10 por 2 deve ser igual a 5', () => {
    expect(divide(10, 2)).toBe(5);
  });
  test.failing ('Divisão por 0 lança excessão', () => {
    expect(divide(10, 0)).toThrow(new Error('Divisão por zero não é permitida.'));
  });
})