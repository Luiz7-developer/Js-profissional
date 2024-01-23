const medida = prompt("Insira uma medida em metros:");
const unidade = prompt(
  "para qual unidade de medida deseja converter?" +
    "\n1, milímetros (mn)" +
    "\n2, centimentros (cm)" +
    "\n3, decimetros (dm)" +
    "\n4, decametros (dam)" +
    "\n5, hectometros (hm)" +
    "\n6, quilometro (km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mn");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "M = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "M = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "M = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção invalida.");
}
