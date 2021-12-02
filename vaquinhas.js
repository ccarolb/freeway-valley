//variáveis das vacas:

let vacasTamanho = {
  comprimento: 50,
  altura: 55
};
let vacasY = [30, -70, -140];
let vacasX = [275, 390, 340];
let vacasVelocidade = [6.7, 6.5, 5];
let vacasColisao = {
  comprimento: 35,
  altura: 40
};


//variáveis das vaquinhas:

let vaquinhasTamanho = {
  comprimento: 40,
  altura: 45
};
let vaquinhasY = [30, -40, -20, 70];
let vaquinhasX = [250, 365, 190, 150];
let vaquinhasVelocidade = [8, 7.5, 6, 3.5];
let vaquinhasColisao = {
  comprimento: 25,
  altura: 30
};

function mostraVacas() {
  
 for(let i = 0; i < imagemVacas.length; i++) {
    image(imagemVacas[i], vacasX[i], vacasY[i], 50, 55);
  }
 for(let i = 0; i < imagemVaquinhas.length; i++) {
    image(imagemVaquinhas[i], vaquinhasX[i], vaquinhasY[i], 40, 45);
  }
}

function movimentaVacas() {
  for(let i = 0; i < vacasY.length && i < vacasVelocidade.length; i++) {
  vacasY[i] += vacasVelocidade[i];
  }
  for(let i = 0; i < vaquinhasY.length && i < vaquinhasVelocidade.length; i++) {
  vaquinhasY[i] += vaquinhasVelocidade[i];
  }
}

function voltaPosicaoInicialdasVacas() {
  if(vacasY[0] > 365) {
    vacasY[0] = 30;
    }
  if(vaquinhasY[0] > 365) {
    vaquinhasY[0] = 30;
    }
  for(let i = 1; i < vacasY.length; i++) {
  if(passouTodaATela(vacasY[i])) {
    vacasY[i] = -70;
    }
  }
  
  for(let i = 1; i < vaquinhasY.length; i++) {
  if(passouTodaATela(vaquinhasY[i])) {
    vaquinhasY[i] = -120
    }
  }
}



function passouTodaATela(yDasVacas) {
  return yDasVacas > 365
}