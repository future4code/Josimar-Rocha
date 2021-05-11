//Exercícios de interpretação de código
/*
1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)
if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")

a. O teste informa se passou ou não no teste
b. Para numeros pares, ou resto igual a 0
c. Para numeros impares, ou seja com resto dirente de 0

2.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para imprimir os e seus valores de frutas 
b. 2.25
c. Se retira o break, pode continuar contatenando o programa

3.
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a.Pede para digitar um numero
b.10 (numero passou no teste e mensagem secreta) / -10 (Não passou no teste)
c.Caso seja menor que 0

}*/






//Exercícios de escrita de código

//1.
const podeDirigir = () => {
    const idade = Number(prompt("Qual sua idade?"))
      if(idade >= 18 ) {
          console.log("Pode dirigir ")
      } else  {
          console.log("Nao pode dirigir")
      }
  }
  
  podeDirigir()

//2.
const turnoDeAula_a = () => {
    const turno = prompt("Digite seu turno: M, V ou N ?").toLocaleLowerCase()
    if (turno === 'm') {
        console.log("Bom dia !")
    } else if (turno === 'v') {
        console.log("Boa tarde!")
    } else if (turno === 'n') { 
        console.log("Boa noite!")
    }  else {
        console.log("Turno invalido, informe  M, V ou N")
    }  
} 

turnoDeAula_a()


//3.
const turnoDeAula = () => {
    const turno = prompt("Digite seu turno: M, V ou N ?").toLocaleLowerCase()
    switch(turno) {
      case "m":
          console.log("Bom dia !")
          break
      case "v":
          console.log("Boa tarde!")
          break
      case "n":
          console.log("Boa noite!")
          break
      default:
          console.log("Turno desconhecido")
    }
  }
  
  turnoDeAula()

//4.
const filmes = () => {
    const tipoFilme = prompt("Qual o gênero do filme ? :")
    const valorFilme = Number(prompt("Qual o valor do infresso ? :"))

     if(tipoFilme === "fantasia" && valorFilme <= 15) {
        console.log("Bom filme")
    } else  {
        console.log("Escolha outro filme :(")
    }
}

filmes()


