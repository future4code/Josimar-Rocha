//Exercícios de interpretação de código
/*1. 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
R: Retornará os valores 10 e 50
*/

/*2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

R: Const resposta transformará todas as letras da frase em minúsculas, 
e ainda retornara true ou flase se tiver a string cenoura contida no texto.
*/


Exercícios de escrita de código
---------------------------Exercicio 1-------------------------
1.A
function sobreMim() {
    console.log("Eu sou Josimar, tenho 25 anos, moro em Brasília e sou estudante.")
   } 
   sobreMim()
1.B 
function dados () {
    console.log(`Eu sou ${nomeInserido} tenho ${idadeInserida} anos moro em ${endereco} e sou ${profissao}`)
 }
 
 const nomeInserido = prompt('Insira seu nome')
 const idadeInserida = prompt('Insira sua Idade ?')
 const endereco = prompt('Qual o seu endereço ?')
 const profissao = prompt('Qual a sua profissão ?') 
 dados()

 ---------------------------Exercicio 2-------------------------

//2.A
function somaNumeros (num1, num2) {
    const somaDois = num1 + num2
    return somaDois
  }
  
  const soma1 = Number(prompt("Vamos somar ? Insira um numero"))
  const soma2 = Number(prompt("Insira outro numero"))
  
  const somaTotal = (soma1) + (soma2)
  console.log("A soma é", somaTotal)

//2.B
function comparacao (num1, num2) {
    const maiorq = num1 >= num2
    return maiorq
  }
  
  const numer1 = Number(prompt("Vamos comparar ?, Insira um numero"))
  const numer2 = Number(prompt("Insira outro numero"))
  
  const maiorNum = (numer1) >= (numer2)
  console.log(maiorNum)

//2.C
function epar (num1) {
    const numpar = (num1 % 2) == 0
    return numpar
  }
  
  const numer_1 = Number(prompt("Insira um numero para verificar se é par"))
  
  
  const seePar = (numer_1 % 2) == 0
  console.log("Se for par é true.", seePar)



