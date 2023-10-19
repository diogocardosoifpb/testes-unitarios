const validarSenha = require('./senha');

test('Senha válida deve passar na validação', () => {
  expect(validarSenha('Senha@123')).toBe(true);
});

test('Senha deve ter pelo menos 8 caracteres', () => {
  expect(validarSenha('Ab#7')).toBe(false);
});

test('Senha deve ter pelo menos uma letra maiúscula', () => {
  expect(validarSenha('senha@123')).toBe(false);
});
