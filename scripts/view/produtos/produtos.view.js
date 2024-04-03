import { Tabela } from "../elements/tabela/tabela.view.js";
import { BarraCaminho } from "../elements/barraCaminho.view.js";
import { BotaoCadastrar } from "../elements/botao/botaoCadastrar.view.js";
import { BotaoCriarEtiqueta } from "../elements/botao/botaoCriarEtiqueta.view.js";
import { BotaoCriarRelatorio } from "../elements/botao/botaoCriarRelatorio.view.js";
import { SecaoAcoes } from "../elements/secaoAcoes.view.js";
import executarProdutoMapper from "../util/produtoItemTabelaMapper.js";

export class ProdutosView {
  constructor(service, modalCadastro, props) {
    this.service = service;
    this.modalCadastro = modalCadastro;
    this.props = props;
  }

  montarBarraCaminho() {
    return new BarraCaminho({
      aba: "Produtos",
      acao: () => console.log("Início"),
    }).executar();
  }

  montarSecaoAcoes() {
    const secaoAcaoProps = {
      placeholder: "Buscar produtos...",
      icone: this.props.icone,
      botoes: this.montarBotoes()
    };

    return new SecaoAcoes(this.service, secaoAcaoProps).executar();
  }

  montarSecaoPaginacao(itensPorPagina) {
    const secao = document.createElement("section");
    secao.id = "pagination";
    const totalPaginas = Math.ceil(this.service.listar().length / itensPorPagina);
    const props = ["Página: ", "1", " de ", totalPaginas];
    const conteudo = props.map((prop) => {
      const span = document.createElement("span");
      span.innerText = prop;
      return span;
    });
    conteudo.forEach((item) => secao.appendChild(item));
    return secao;
  }

  montarConteudo(filtro) {
    const acoesProdutos = [
      { nome: "Analisar Produto", src: "assets/icons/Analyze.png" },
      { nome: "Editar Produto", src: "assets/icons/Create.png" },
      { nome: "Remover Produto", src: "assets/icons/delete.svg" },
    ];
    const secao = document.createElement("section");
    secao.id = "products-list";

    const tabelaProdutos = new Tabela(
      ["Código", "Nome", "Foto", "Classificação", "Marca", "Preço", "Ações"],
      this.service.listar(filtro),
      acoesProdutos,
      secao,
    );
    tabelaProdutos.render(executarProdutoMapper);
    return secao;
  }

  montarBotoes() {
    const botoes = [
      new BotaoCadastrar({
        nome: "Cadastrar Produto",
        acao: () => this.modalCadastro.showModal(),
      }).executar(),
      new BotaoCriarEtiqueta({
        acao: () => console.log("Etiqueta criada com sucesso!"),
      }).executar(),
      new BotaoCriarRelatorio({
        acao: () => console.log("Relatório criado com sucesso!"),
      }).executar(),
    ];

    return botoes;
  }

  montarSecaoItensPorPagina() {
    const secao = document.createElement("section");
    const label = document.createElement("label");
    const select = document.createElement("select");
    const opcoes = [];
    for (let index = 10; index < 60; index += 10) {
      opcoes.push(index);
    }
    label.innerText = "Resultados por página:";
    opcoes.forEach((opcao, key) => {
      if(opcao === 10) {
        select[key] = new Option(opcao, opcao, true, true);
      }
      select[key] = new Option(opcao, opcao);
    });
    select.name = "items-per-page";
    select.id = "items-shown";

    select.addEventListener("change", () => {
      this.montarSecaoPaginacao(Number(select.value))
    })

    secao.id = "items-per-page";
    secao.append(label, select);
    return {itensPorPagina: Number(select.value), secaoItensPorPagina: secao};
  }

  montarSecaoProdutos(itensPorPagina, filtro) {
    const produtos = document.createElement("section");
    produtos.classList.add("produtos");
    produtos.id = "products-content";
    const conteudo = [
      this.montarSecaoAcoes(),
      this.montarSecaoPaginacao(itensPorPagina),
      this.montarConteudo(filtro),
    ];
    conteudo.forEach((item) => produtos.appendChild(item));
    return produtos;
  }

  executar(filtro) {
    const { itensPorPagina, secaoItensPorPagina } = this.montarSecaoItensPorPagina();
    const secaoProdutos = this.montarSecaoProdutos(itensPorPagina, filtro);
    const barraCaminho = this.montarBarraCaminho();
    const div = document.createElement("div");
    div.classList.add("container", "products");
    div.append(barraCaminho, secaoProdutos, secaoItensPorPagina, this.modalCadastro);
    return div;
  }
}
