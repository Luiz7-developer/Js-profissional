const nome = prompt("Olá turista!!, Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual e o nome da cidade visitada?");
  // += vai contatenar as cidades : cidades = cidades + ...
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você vistou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    cidades
);
