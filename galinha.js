//variáveis da galinha:
let galinha = {
  x: 30,
  y: 85,
  diametro: 27,
  velocidadeX: 5,
  velocidadeY: 5
}

let pontos = 0;
function contadorDePontos() {
  stroke(255)
  fill(0)
  textSize(35)
  textAlign(CENTER)
  text(pontos, 160, 40)
  if(passouTodaTela(galinha.x)) {
    somPontos.play(0, 2, 0.5);
    pontos++
    galinha.x = 30
    galinha.y = 85
  }
}

function passouTodaTela(xGalinha) {
  return xGalinha > 530;
}

function andaGalinha() {
  if(keyIsDown(RIGHT_ARROW)) {
      galinha.x += 3;
    image(galinhaPasso1R, galinha.x, galinha.y, 27, 27)
    }
  else if(keyIsDown(LEFT_ARROW)) {
      galinha.x -= 3;
    image(galinhaPasso1L, galinha.x, galinha.y, 27, 27)
    }
  else if(keyIsDown(UP_ARROW)) {
    galinha.y-= 3;
    image(galinhaAndaCima2, galinha.x, galinha.y, 27, 32);
    }
  else if(keyIsDown(DOWN_ARROW)) {
    image(galinhaAndaBaixo2, galinha.x, galinha.y, 27, 32)
    galinha.y+= 3;
    }
  else {
    image(galinhaParadaR, galinha.x, galinha.y, 27, 27)
    }
}

let colidiu = false;

function verificaColisaoGalinhaComVacas() {
  for(let i = 0; i < vacasX.length && i < vacasY.length; i++) {
  colidiu = collideRectCircle(vacasX[i], vacasY[i], vacasColisao.comprimento, vacasColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
      somVacas.play();
      galinha.x = 30;
      galinha.y = 180;
      if(pontos > 0) {
      pontos--
    }
    }
  }
}

function verificaColisaoGalinhaComVaquinhas() {
  for(let i = 0; i < vaquinhasX.length && i < vaquinhasY.length; i++) {
  colidiu = collideRectCircle(vaquinhasX[i], vaquinhasY[i], vaquinhasColisao.comprimento, vaquinhasColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
      somVaquinhas.play();
      galinha.x=30;
      galinha.y=180;
    if(pontos > 0) {
      pontos--
    }
    }
  }
}

function verificaColisaoGalinhaComEstufa() {
   colidiu = collideRectCircle(estufa.x, estufa.y, estufaColisao.comprimento, estufaColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
    if(galinha.x < estufa.comprimento && galinha.y < estufa.altura) {
    galinha.y+=3
    }
  }
}

function verificaColisaoGalinhaEstufa() {
   colidiu = collideRectCircle(estufa.x, estufa.y, estufaColisao.comprimento, estufaColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
    if(galinha.x < estufa.comprimento && galinha.y < estufa.altura) {
    galinha.x+=3
    galinha.y-=3
    }
  }
}

function verificaColisaoGalinhaComCeleiro() {
   colidiu = collideRectCircle(celeiro.x, celeiro.y, celeiroColisao.comprimento, celeiroColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
    if(galinha.x > celeiro.comprimento && galinha.y < celeiro.altura) {
    galinha.y+=3
    }
  }
}

function verificaColisaoGalinhaCeleiro() {
   colidiu = collideRectCircle(celeiro.x, celeiro.y, celeiroColisao.comprimento, celeiroColisao.altura, galinha.x, galinha.y, 27/2); 
  if(colidiu) {
    if(galinha.x < celeiro.x + celeiro.comprimento && celeiro.y < celeiro.altura) {
    galinha.x-=3
    galinha.y-=3
    } else {
      galinha.x+=3
      galinha.y-=3
    }
  }
}

function verificaColisaoGalinhaBordas() {
  if(galinha.x > 538) {
    galinha.x -= 3
  }
  if(galinha.x < 2) {
    galinha.x +=3
  }
  if(galinha.y < -4) {
    galinha.y+=3
  }
  if(galinha.y > 333.5) {
    galinha.y-=3
  }
}