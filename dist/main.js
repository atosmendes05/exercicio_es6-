"use strict";

var alunos = [{
  nome: 'atos',
  nota: 6
}, {
  nome: 'geovanna',
  nota: 7
}, {
  nome: 'maria',
  nota: 5
}, {
  nome: 'neto',
  nota: 6
}, {
  nome: 'gabriel',
  nota: 5
}];
var media = function media() {
  var i = 0;
  while (i < alunos.length) {
    if (alunos[i].nota >= 6) {
      console.log("aluno ".concat(alunos[i].nome, " com a nota ").concat(alunos[i].nota, " foi aprovado"));
    }
    i = i + 1;
  }
};
media();