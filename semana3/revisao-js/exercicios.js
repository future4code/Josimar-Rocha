// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = [];
  for(let i = array.length - 1; i >= 0; i-- ) {
    novoArray.push(array[i])   
}
    return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
 
  let novoArray = []
	let i = 0
  while (i < array.length) {
		if (array[i] % 2 === 0) {
	    novoArray.push(array[i] ** 2 )
	  }
    i++
  }
	return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  
  let novoArray = []
	let i = 0
  while (i < array.length) {
		if (array[i] % 2 === 0) {
	      novoArray.push(array[i])
	  }
    i++
  }
	return novoArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
for(let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
        maiorNumero = array[i]
    }
}
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const qtdNome = array.length
  return qtdNome
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true ]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const resultado = [];

  for(let i = 0; resultado.length < n; i++) {
   if(i % 2 === 0) {
     resultado.push(i)
   }
  }
  return resultado
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if ((a === b) && (b === c)) {
    return 'Equilátero'
  }

  else if ((a != b) && (b != c)) {
    return 'Escaleno'
  }

  else {
    return 'Isósceles'
  }

  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  let maiorNumero 
  let menorNumero 
  let maiorDivisilPorMenor
  
  
    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
        }
    else{
        maiorNumero = num2
        menorNumero = num1
    } 


    maiorDivisilPorMenor = maiorNumero % menorNumero === 0;
    diferenca = maiorNumero - menorNumero


    return {
    maiorNumero : maiorNumero,
    maiorDivisilPorMenor : maiorDivisilPorMenor,
    diferenca : diferenca
    }
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  /*const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let listAtor = []

  for(let i = 1; i <= filme.atores.length; i++ ){
    listaAtor.push(`${filme.atores[-1]}`)
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${listAtor}.`
*/
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  const criaRetangulo = {
    largura : lado1,
    altura : lado2,
    perimetro : (2 * (lado1 + lado2)),
    area : lado1 * lado2
  }
  return criaRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const anonimo ={
  ...pessoa,
  nome: 'ANÔNIMO'
  }
  return anonimo
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const arrayMaior = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return arrayMaior
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const arrayMenor = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return arrayMenor
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((numeros) => {
    return numeros * 2
  })

	return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((numeros) => {
    return (numeros * 2).toString()
  })

	return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((numeros) => {
    if (numeros % 2 === 0) {
      return `${numeros} é par`
    }
    else{
      return `${numeros} é ímpar`
    }
  })

	return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  
  let pessoasAutorizadas = []

  for(const pessoa of pessoas) {
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  
  let pessoasNaoAutorizadas = []

  for(const pessoa of pessoas) {
    if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
