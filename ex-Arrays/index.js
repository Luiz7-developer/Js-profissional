function FraseBomDia(pronome, nome, sobrenome) {
  const frases = [];

  for (let i = 0; i < nome.length; i++) {
    const frase = `Olá ${pronome[i]} ${nome[i]} ${sobrenome[i]}, tenha um Bom dia!!`;
    frases.push(frase);
  }
  return frases;
}

const Pronomes = ["Sra.", "Sr.", "Srta."];
const Nomes = ["Carla", "Paulo", "Eduarda"];
const Sobrenomes = ["Nascimento", "Passos", "Lorrayne"];

console.log(FraseBomDia(Pronomes, Nomes, Sobrenomes));
