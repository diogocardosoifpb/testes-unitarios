function converterRomano(romano) {
  const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = romano.length - 1; i >= 0; i--) {
    const currentValue = romanos[romano[i]];

    if (currentValue >= prevValue) {
      total += currentValue;
    } else {
      total -= currentValue;
    }

    prevValue = currentValue;
  }

  return total;
}

module.exports = converterRomano;
