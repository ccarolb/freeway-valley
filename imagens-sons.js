//imagens do jogo:
let cenario;
let galinhaPasso1R;
let galinhaPasso1L;
let galinhaAndaCima2;
let galinhaAndaBaixo2;
let galinhaParadaR;
let vaquinhaBranca;
let vaquinhaMarrom;
let vacaBranca;
let vacaMarrom;

//sons do jogo:
let musica;
let somGalinha;
let somVacas;
let somPontos;
let somVaquinhas;

function preload() {
  cenario = loadImage("imagens/cenario.png");
  galinhaPasso1R = loadImage ("imagens/galinha.png");
  galinhaPasso1L = loadImage ("imagens/galinhaesquerda.png");
  galinhaParadaR = loadImage("imagens/galinhaparada.png");
  galinhaAndaCima2 = loadImage("imagens/galinhapasso2cima.png");
  galinhaAndaBaixo2 = loadImage("imagens/galinhabaixopasso2.png")
  vacaBranca = loadImage("imagens/vaca branca.png");
  vacaMarrom = loadImage("imagens/vacamarrom.png");
  vaquinhaBranca = loadImage("imagens/vaquinha branca.png")
  vaquinhaMarrom = loadImage ("imagens/vaquinha marrom.png");
  imagemVaquinhas = [vaquinhaMarrom, vaquinhaBranca, vaquinhaBranca, vaquinhaMarrom]
  imagemVacas = [vacaBranca, vacaMarrom, vacaMarrom];
  
  musica = loadSound("sons/funfestival.mp3");
  somGalinha = loadSound("sons/galinha.mp3");
  somVaquinhas = loadSound("sons/vaca.wav");
  somPontos = loadSound("sons/pontos.wav");
  somVacas = loadSound("sons/bezerro-berrando (mp3cut.net) (1).mp3")
}