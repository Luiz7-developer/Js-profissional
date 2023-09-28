const entrada1 = prompt("informe o primeiro numero");
const entrada2 = prompt("Informe o segundo numero");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  "Resultados:\n" +
    "\nsoma: " +
    soma +
    "\nsubtração: " +
    subtração +
    "\nmultiplicação: " +
    multiplicação +
    "\n divisão: " +
    divisão
);
