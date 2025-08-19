export class Tabuleiro {
  constructor() {
    this.linhas = 7;
    this.colunas = 7;
    this.estado = this.criarEstadoInicial();
  }

  criarEstadoInicial() {
    // -1 = inválido, 0 = vazio, 1 = peça
    return [
      [-1,-1,1,1,1,-1,-1],
      [-1,-1,1,1,1,-1,-1],
      [ 1, 1,1,1,1, 1, 1],
      [ 1, 1,1,0,1, 1, 1],
      [ 1, 1,1,1,1, 1, 1],
      [-1,-1,1,1,1,-1,-1],
      [-1,-1,1,1,1,-1,-1]
    ];
  }

  movimentoValido(origem, destino) {
    let dx = destino.linha - origem.linha;
    let dy = destino.coluna - origem.coluna;

    if (!((Math.abs(dx) === 2 && dy === 0) || (Math.abs(dy) === 2 && dx === 0))) {
      return false;
    }

    if (this.estado[origem.linha][origem.coluna] !== 1) return false;
    if (this.estado[destino.linha][destino.coluna] !== 0) return false;

    let meio = {
      linha: (origem.linha + destino.linha) / 2,
      coluna: (origem.coluna + destino.coluna) / 2
    };
    if (this.estado[meio.linha][meio.coluna] !== 1) return false;

    return true;
  }

  realizarMovimento(origem, destino) {
    if (this.movimentoValido(origem, destino)) {
      let meio = {
        linha: (origem.linha + destino.linha) / 2,
        coluna: (origem.coluna + destino.coluna) / 2
      };
      this.estado[origem.linha][origem.coluna] = 0;
      this.estado[meio.linha][meio.coluna] = 0;
      this.estado[destino.linha][destino.coluna] = 1;
      return true;
    }
    return false;
  }
}

contarPecas() ;{
  let total = 0;
  for (let i = 0; i < this.linhas; i++) {
    for (let j = 0; j < this.colunas; j++) {
      if (this.estado[i][j] === 1) total++;
    }
  }
  return total;
}
