let carro1 = prompt("Qual a velocidade do primeiro veiculo ");
let carro2 = prompt("Qual a velocidade do segundo veiculo");

const veiculo1 = parseFloat(carro1);
const veiculo2 = parseFloat(carro2);

if (veiculo1 > veiculo2) {
  alert("O carro 1 e o mais rapido");
} else if (veiculo1 == veiculo2) {
  alert("Os carro tem a mesma velocidade");
} else {
  alert("O carro 2 e mais rapido");
}
