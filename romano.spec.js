import converterRomano from "./romano";
test('Conversão de "III" deve retornar 3', () => {
  expect(converterRomano('III')).toBe(3);
});

test('Conversão de "IX" deve retornar 9', () => {
  expect(converterRomano('IX')).toBe(9);
});

test('Conversão de "XXI" deve retornar 21', () => {
  expect(converterRomano('XXI')).toBe(21);
});
