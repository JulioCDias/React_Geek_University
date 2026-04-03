class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
let pessoa1 = new Pessoa("Julio", 30);
pessoa1.saudacao();

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }

  apresentacao() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`,
    );
  }
}
let funcionario1 = new Funcionario("Maria", 25, "Analista de Sistemas");
funcionario1.apresentacao();
