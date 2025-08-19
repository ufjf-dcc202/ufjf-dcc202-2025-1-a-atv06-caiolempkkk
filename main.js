import { Tabuleiro } from "./tabuleiro.js";

let jogo = new Tabuleiro();
let origem = null;

function render() {
  let container = document.getElementById("tabuleiro");
  container.innerHTML = "";

  for (let i = 0; i < jogo.linhas; i++) {
    let linhaDiv = document.createElement("div");
    linhaDiv.classList.add("linha");

    for (let j = 0; j < jogo.colunas; j++) {
      let celula = document.createElement("div");
      celula.classList.add("celula");

      if (jogo.estado[i][j] === -1) {
        celula.classList.add("invalida");
      } else if (jogo.estado[i][j] === 1) {
        celula.classList.add("peca");
      } else {
        celula.classList.add("vazio");
      }

      celula.addEventListener("click", () => cliqueCelula(i, j));
      linhaDiv.appendChild(celula);
    }
    container.appendChild(linhaDiv);
  }
}

function cliqueCelula(linha, coluna) {
  if (!origem) {
    if (jogo.estado[linha][coluna] === 1) {
      origem = { linha, coluna };
    }
  } else {
    let destino = { linha, coluna };
    if (jogo.realizarMovimento(origem, destino)) {
      render();
    }
    origem = null;
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  jogo = new Tabuleiro();
  render();
});

render();

function render() {
  let container = document.getElementById("tabuleiro");
  container.innerHTML = "";

  for (let i = 0; i < jogo.linhas; i++) {
    let linhaDiv = document.createElement("div");
    linhaDiv.classList.add("linha");

    for (let j = 0; j < jogo.colunas; j++) {
      let celula = document.createElement("div");
      celula.classList.add("celula");

      if (jogo.estado[i][j] === -1) {
        celula.classList.add("invalida");
      } else if (jogo.estado[i][j] === 1) {
        celula.classList.add("peca");
      } else {
        celula.classList.add("vazio");
      }

      if (origem && origem.linha === i && origem.coluna === j) {
        celula.classList.add("selecionada");
      }

      celula.addEventListener("click", () => cliqueCelula(i, j));
      linhaDiv.appendChild(celula);
    }
    container.appendChild(linhaDiv);
  }
}

if (jogo.realizarMovimento(origem, destino)) {
  render();
  if (jogo.contarPecas() === 1) {
    setTimeout(() => alert("Parabéns! Você venceu!"), 100);
  }
}

