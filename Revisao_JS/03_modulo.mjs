import pessoa from "./modulos/pessoa.mjs";
import { ola } from "./modulos/util.mjs";

console.log(pessoa.nome);
pessoa.saudacao();
console.log(ola(pessoa.nome));
console.log(soma(5, 3));
