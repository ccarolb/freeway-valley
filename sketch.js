//variáveis da estufa:

let estufa = {
  x: 0,
  y: -20,
  comprimento: 88,
  altura: 82
}
let estufaColisao = {
  comprimento: 80,
  altura: 80
}

//variáveis do celeiro:

let celeiro = {
  x: 200,
  y: -20,
  comprimento: 120,
  altura: 48
}

let celeiroColisao = {
  comprimento: 129,
  altura: 40
}

function setup() {
  createCanvas(580, 360);
  somGalinha.play(0, 1, 4);
  musica.loop(0.4, 1, 1)
}

function draw() {
  rect(estufa.x, estufa.y, estufa.comprimento, estufa.altura);
  rect(celeiro.x, celeiro.y, celeiro.comprimento, celeiro.altura);
  background(cenario);
  mostraVacas();
  movimentaVacas();
  andaGalinha();
  voltaPosicaoInicialdasVacas();
  verificaColisaoGalinhaComVacas();
  verificaColisaoGalinhaComVaquinhas();
  verificaColisaoGalinhaComEstufa();
  verificaColisaoGalinhaEstufa();
  verificaColisaoGalinhaComCeleiro();
  verificaColisaoGalinhaCeleiro();
  verificaColisaoGalinhaBordas();
  contadorDePontos();
}
