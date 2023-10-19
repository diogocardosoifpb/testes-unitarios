export default function verificarParenteses(sequência) {
  const pilha = [];
  
  for (let caractere of sequência) {
    if (caractere === '(') {
      pilha.push(caractere);
    } else if (caractere === ')') {
      if (pilha.length === 0) {
        return false;
      }
      pilha.pop();
    }
  }

  return pilha.length === 0;
}

