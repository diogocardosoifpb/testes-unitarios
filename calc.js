function add(a, b) {
  if(typeof a === 'number' && typeof b === 'number')
    return a + b;
  return 'Digite valores numéricos'
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
