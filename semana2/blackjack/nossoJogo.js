/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const meuGame = () => {
   if(confirm("Quer iniciar uma nova rodada ?")) {
      console.log("Bem vindo ao jogo Blackjack")
   } else {
      console.log("O jogo acabou")
   }
}
meuGame()

const game = () => {
   let play1carta1 = compracarta()
   let play1carta2 = compracarta()

   let play2carta1 = compracarta()
   let play2carta2 = compracarta()

   const somaplayer1 = play1carta1.valor +  play1carta2.valor
   const somaplayer2 = play2carta1.valor + play2carta2
}


const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)