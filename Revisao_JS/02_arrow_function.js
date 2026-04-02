//Arrow Finction
//Função tradicional
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3)); // Output: 5

//Arrow Function
const somaArrow = (a, b) => a + b;
console.log(somaArrow(2, 3)); // Output: 5

//Arrow Function com mais de uma linha
const somaArrowMultiline = (a, b) => {
  const resultado = a + b;
  return resultado;
};
console.log(somaArrowMultiline(2, 3)); // Output: 5

//Arrow Function sem parâmetros
const saudacao = () => "Olá!";
console.log(saudacao()); // Output: Olá!

//Arrow Function com um único parâmetro (parênteses opcionais)
const quadrado = (x) => x * x;
console.log(quadrado(4)); // Output: 16

//Arrow Function e o contexto de 'this'
const pessoa = {
  nome: "Alice",
  idade: 25,
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
  saudacaoArrow: () => {
    // 'this' em uma arrow function não se refere ao objeto 'pessoa'
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

pessoa.saudacao(); // Output: Olá, meu nome é Alice e tenho 25 anos.
pessoa.saudacaoArrow(); // Output: Olá, meu nome é undefined e tenho undefined anos.

//função anonima
setTimeout(function () {
  console.log("Função anônima executada após 2 segundos");
}, 2000);

//Arrow Function como função anônima
setTimeout(() => {
  console.log("Arrow Function executada após 2 segundos");
}, 2000);

//Arrow Function com recursão
const fatorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
};

console.log(fatorial(5)); // Output: 120
