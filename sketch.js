let campoIdade
let campoRomance
let campoComédia

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade");
  campoIdade = createInput("5");
  campoRomance = createCheckbox("Gosta de romance?")
  campoComedia = createCheckbox("Gosta de comedia?")
}
function draw() {
  background("white");
  
  let idade = campoIdade.value();
  
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance, gostaDeComedia);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomance, gostaDeComedia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Continência ao Amor";
    } else {
      if (idade >= 12) {
        if(gostaDeRomance || gostaDeComedia) {
          return "Esposa de Aluguel";
        } else {
          if (idade >= 12) {
            if(gostaDeComedia){
              return "Gente Grande";
            }
          }
        }
      }
    }
  }
}
