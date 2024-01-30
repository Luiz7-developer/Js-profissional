let velocidade = prompt("Qual a velocidade do carro?");

do {
  alert("A velocidade do veiculo é " + velocidade + "km/h");
  velocidade -= 10;
} while (velocidade > 70);

alert("velocidade final: " + velocidade + "km/h");
