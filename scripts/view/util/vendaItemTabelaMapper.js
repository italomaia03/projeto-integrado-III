import { AcoesTabela } from "../elements/tabela/acoesTabela.view.js";
import { criarColunaAcoes } from "./produtoItemTabelaMapper.js";
import { ItemTabela } from "../elements/tabela/itemTabela.view.js";

function vendaItemTabelaMapper (venda, acoes) {
    let { dataVenda, situacaoVenda, totalVenda, ...atributosVenda } = venda;

    totalVenda = `R$${totalVenda}`.replace(/\./, ",");
    dataVenda = dataVenda.toLocaleString();
    atributosVenda = Object.values(atributosVenda);
    
    atributosVenda.push(totalVenda);
    atributosVenda.splice(2, 0, dataVenda)

    const colunas = atributosVenda.map(atributo => {
        const coluna = document.createElement("td");
        coluna.innerText = atributo;
        return coluna;
    });

    const situacaoCol = document.createElement("td");
    const acoesVenda = criarColunaAcoes(new AcoesTabela(acoes).executar());
    const situacaoIcone = document.createElement("img");
    situacaoIcone.classList.add("table-row-icon");
    situacaoIcone.src = situacaoVenda ? "assets/icons/yes.svg" : "assets/icons/not_ok.svg";
    situacaoCol.appendChild(situacaoIcone);
    colunas.push(situacaoCol);
    colunas.push(acoesVenda);

    return colunas;
}

export default function executarVendaMapper(vendas, acoes) {
    return vendas
      .map((venda) => vendaItemTabelaMapper(venda, acoes))
      .map((venda) => new ItemTabela(venda).executar());
  }