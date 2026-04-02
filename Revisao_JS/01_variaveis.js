let nome = "Julio";
let idade = 30;
let altura = 1.75;
let isStudent = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("É estudante?", isStudent);
// Variáveis podem ser reatribuídas
nome = "Maria";
idade = 25;
altura = 1.65;
isStudent = false;

console.log("Nome atualizado:", nome);
console.log("Idade atualizada:", idade);
console.log("Altura atualizada:", altura);
console.log("É estudante?", isStudent);
// Variáveis podem ser declaradas sem valor inicial
let cidade;
console.log("Cidade:", cidade); // undefined

cidade = "São Paulo";
console.log("Cidade atualizada:", cidade);
// Variáveis podem ser declaradas usando var, let ou const
var pais = "Brasil"; // var é global ou local ao escopo da função
let estado = "São Paulo"; // let é local ao bloco
const continente = "América do Sul"; // const é constante e deve ser inicializada

console.log("País:", pais);
console.log("Estado:", estado);
console.log("Continente:", continente);

// Tentando reatribuir uma constante causará um erro
// continente = "Europa"; // Uncaught TypeError: Assignment to constant variable.
