export class Tabela {
  constructor(cabecalho, dados, acoes, conteiner, mapper) {
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

  criarTabela(mapper) {
    const tabela = document.createElement("table");
    const corpo = document.createElement("tbody");
    const cabecalho = document.createElement("thead");
    const titulos = this.criarCabecalho();
    const dados = mapper(this.dados, this.acoes);
    cabecalho.appendChild(titulos);
    dados.forEach((dado) => corpo.appendChild(dado));
    tabela.appendChild(cabecalho);
    tabela.appendChild(corpo);
    return tabela;
  }

  render(mapper) {
    const tabela = this.criarTabela(mapper);
    this.conteiner.appendChild(tabela);
  }
}
