import produtoItemTabelaMapper from "../../util/produtoItemTabelaMapper.js";
import { ItemTabela } from "./itemTabela.view.js";

export class Tabela {
  constructor(cabecalho, dados, acoes, conteiner) {
    this.titulos = cabecalho;
    this.dados = dados;
    this.acoes = acoes;
    this.conteiner = conteiner;
  }

  criarTituloCabecalho(dados) {
    const titulo = document.createElement("th");
    titulo.innerText = dados;
    return titulo;
  }

  criarCabecalho() {
    const linha = document.createElement("tr");
    const titulosHtml = this.titulos.map((titulo) =>
      this.criarTituloCabecalho(titulo)
    );
    titulosHtml.forEach((titulo) => linha.appendChild(titulo));
    return linha;
  }

  mapearDados() {
    return this.dados.map(dado => new ItemTabela(dado).executar(() => produtoItemTabelaMapper(dado, this.acoes)))
  }



  criarTabela() {
    const tabela = document.createElement("table");
    const corpo = document.createElement("tbody");
    const cabecalho = document.createElement("thead");
    const titulos = this.criarCabecalho();
    const dados = this.mapearDados();
    console.log(dados);
    cabecalho.appendChild(titulos);
    dados.forEach((dado) => corpo.appendChild(dado));
    tabela.appendChild(cabecalho);
    tabela.appendChild(corpo);
    return tabela;
  }

  render() {
    const tabela = this.criarTabela();
    this.conteiner.appendChild(tabela);
  }
}
