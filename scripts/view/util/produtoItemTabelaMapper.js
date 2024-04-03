import { AcoesTabela } from "../elements/tabela/acoesTabela.view.js";
import { ItemTabela } from "../elements/tabela/itemTabela.view.js";

export function produtoItemTabelaMapper(produto, acoes) {
  let { fotoProduto, precoProduto, ...atributos } = produto;

  precoProduto = `R$${precoProduto}`.replace(/\./, ",");

  atributos = Object.values(atributos);
  atributos.push(precoProduto);

  const colunas = atributos.map((atributo) => {
    const coluna = document.createElement("td");
    coluna.innerText = atributo;
    return coluna;
  });

  const fotoColuna = document.createElement("td");
  const acoesProduto = criarColunaAcoes(new AcoesTabela(acoes).executar());
  const imgEl = criarColunaImagem({
    fotoProduto,
    nomeProduto: produto.nomeProduto,
  });
  fotoColuna.appendChild(imgEl);
  colunas.splice(2, 0, fotoColuna);
  colunas.push(acoesProduto);
  return colunas;
}
function criarColunaImagem(imgEl) {
  const conteiner = document.createElement("img");
  const { fotoProduto, nomeProduto } = imgEl;

  conteiner.src = fotoProduto;
  conteiner.alt = nomeProduto;
  conteiner.classList.add("table-row-icon");

  return conteiner;
}

export function criarColunaAcoes(acoes) {
  const acoesProduto = document.createElement("td");
  acoesProduto.appendChild(acoes);
  return acoesProduto;
}

export default function executarProdutoMapper(produtos, acoes) {
  const linhas = produtos
    .map((produto) => produtoItemTabelaMapper(produto, acoes))
    .map((produto) => new ItemTabela(produto).executar());
  return linhas;
}
