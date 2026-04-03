const pessoa = {
  nome: "Julio",
  idade: 30,
  profissao: "Desenvolvedor",
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};
//exportação padrão do módulo
export default pessoa;
