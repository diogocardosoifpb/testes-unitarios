function validarSenha(senha) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
  return regex.test(senha);
}

module.exports = validarSenha;