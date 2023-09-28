let name = prompt("qual o seu nome?");

let sobrenome = prompt("o seu sobrenome?");

let estudo = prompt("seu campo de estudo");

let ano = prompt("ano de nascimento");

alert(
  "Cadastro feito com sucesso!\n " +
    "\nnome completo: " +
    name +
    " " +
    sobrenome +
    "\ncampo de estudo: " +
    estudo +
    "\nano: " +
    (2023 - ano)
);
