/*Exercícios de interpretação de código
1.
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) // O programa está somando os valores de 0 a 5, 
será impresso o numero 10

2.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} // Imprimirá numeros maiores que 18 contidos na array

3.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}  Imprimirá 0000
*/


//Exercícios de escrita de código
1.
let meusbichinhos = () => {
    let bichinhos = Number(prompt("Quantos bichinhos voce tem ?"))
    let quantidaDeBichinhos = []
    if (bichinhos === 0) {
        console.log("Que pena! Você pode adotar um pet!")
        } else { for (let i= 0; i < bichinhos; i++ )
            {let seusbichinhos = prompt("Digite o nome dos seus pets")
            quantidaDeBichinhos = quantidaDeBichinhos + seusbichinhos 
            console.log(quantidaDeBichinhos)
      }
    
     }
     return
    }
    
meusbichinhos()

