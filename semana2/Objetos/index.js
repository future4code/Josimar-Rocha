//Exercícios de interpretação de código
/*
1.
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Será impresso (Matheus Nachtergaele)
console.log(filme.elenco[filme.elenco.length - 1]) // Será impresso (Virginia Cavendis)
console.log(filme.transmissoesHoje[2]) // Será impresso (canal: "Canal Brasil", horario: "19h)
 */


/*
2.
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // 
Será impresso 
    nome: "Juca", 
	idade: 3, 
	raca: "SRD
console.log(gato) // 
Será impresso
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

console.log(tartaruga) // 
Será impresso
nome: "Jubo"
*/

/*
3. 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // Será impresso false, pois backender está em boleano falso

console.log(minhaFuncao(pessoa, "altura")) // Será impresso undefined pois altura não foi definida
*/





// Exercícios de escrita de código

//1.a
const pessoa = {
    nome: "Josimar", 
    apelidos: ["Josi", "Marzinho", "Jose"]
  }
  
  console.log('Eu sou', pessoa.nome, 'mas pode me chamar de:', pessoa.apelidos)

//1.b
const novaPessoa = {
    ...pessoa,
    apelidos: ["Josiocean", "Martins", "Lindão"]
    }
    
    console.log('Eu sou', pessoa.nome, 'mas pode me chamar de:', novaPessoa.apelidos)

//2.a
const pessoaJoao = {
    nome: "João", 
    idade: 25, 
    profissao: "Engenheiro"
  }
  
  console.log(pessoaJoao.nome, pessoaJoao.nome.length, pessoaJoao.idade, pessoaJoao.profissao, pessoaJoao.profissao.length)
  
  const pessoaMaria = {
      nome: "Maria", 
      idade: 28, 
      profissao: "Médica"
  }
  
  console.log(pessoaMaria.nome, pessoaMaria.nome.length, pessoaMaria.idade, pessoaMaria.profissao, pessoaMaria.profissao.length)  
