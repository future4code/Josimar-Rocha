// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Insira a altura"))
  const largura = Number(prompt("Insira a largura"))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira seu ano de nascimento"))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Insira a altura")
  const idade = Number(prompt("Insira a largura"))
  const email = prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua primeira cor favorita")
  const cor2 = prompt("Qual sua segunda cor favorita")
  const cor3 = prompt("Qual sua terceira cor favorita")

   console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length - 1]

  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const qualAno = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira seu ano de nascimento"))
  const identidade = Number(prompt("Insira o ano da emissão da identidade"))
  
  const idade = qualAno - anoNascimento
  const renov = qualAno - identidade
  
  const cond1 = idade <= 20 && renov >= 5
  const cond2 = idade > 20 && idade <= 50 && renov >= 10
  const cond3 = idade > 50 && renov >= 15
  
  console.log(cond1 || cond2 || cond3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condi1 = ano % 400 === 0
  const condi2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return condi1 || condi2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const anoNasci = prompt(" Você é maior de 18 anos ?")
  const ensinMedio = prompt("- Você possui ensino médio completo ?")
  const dispon = prompt(" Você possui disponibilidade exclusiva durante os horários do curso?")
  
  console.log(anoNasci === 'sim' && ensinMedio === "sim" && dispon === "sim")
}