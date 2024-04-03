import { BarraCaminho } from "../elements/barraCaminho.view.js";
import { BotaoCadastrar } from "../elements/botao/botaoCadastrar.view.js";
import { BotaoCriarRelatorio } from "../elements/botao/botaoCriarRelatorio.view.js";
import { Input } from "../elements/formulario/input.view.js";
import { SecaoAcoes } from "../elements/secaoAcoes.view.js";
import { Tabela } from "../elements/tabela/tabela.view.js";
import vendaItemTabelaMapper from "../util/vendaItemTabelaMapper.js";


export class VendasView {
  constructor(service, modalCadastro, props) {
    this.service = service;
    this.modalCadastro = modalCadastro;
    this.props = props;
  }

  montarBarraCaminho() {
    return new BarraCaminho({
      aba: "Vendas",
      acao: () => console.log("Início"),
    }).executar();
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
      if (opcao === 10) {
        select[key] = new Option(opcao, opcao, true, true);
      }
      select[key] = new Option(opcao, opcao);
    });
    select.name = "items-per-page";
    select.id = "items-shown";

    select.addEventListener("change", () => {
      this.montarSecaoPaginacao(Number(select.value));
    });

    secao.id = "items-per-page";
    secao.append(label, select);
    return { itensPorPagina: Number(select.value), secaoItensPorPagina: secao };
  }

  montarConteudo(filtro) {
    const acoesVendas = [
      { nome: "Analisar Venda", src: "assets/icons/Analyze.png" },
      { nome: "Editar Venda", src: "assets/icons/Create.png" },
      { nome: "Arquivar Produto", src: "assets/icons/arquivar.svg" },
    ];
    const secao = document.createElement("section");
    secao.id = "products-list";

    const tabelaProdutos = new Tabela(
      ["Código", "Caixa", "Data", "Vendedor", "Total", "Situação", "Ações"],
      this.service.listar(filtro),
      acoesVendas,
      secao
    );

    tabelaProdutos.render(vendaItemTabelaMapper);
    return secao;
  }

  montarBotoes() {
    const botoes = [
      new BotaoCadastrar({
        nome: "Cadastrar Venda",
        acao: () => this.modalCadastro.showModal(),
      }).executar(),
      new BotaoCriarRelatorio({
        acao: () => console.log("Relatório criado com sucesso!"),
      }).executar(),
    ];

    return botoes;
  }

  montarSecaoAcoes() {
    const secaoAcaoProps = {
      placeholder: "Nome do vendedor...",
      icone: this.props.icone,
      botoes: this.montarBotoes(),
    };
    const filtrosData = this.montarFiltrosData();
    const secao = new SecaoAcoes(this.service, secaoAcaoProps).executar();
    secao.insertBefore(filtrosData, secao.childNodes[1]);
    return secao
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

  montarFiltrosData() {
    const conteiner = document.createElement("div");
    conteiner.id = "date-filters";
    const inputDataInicial = new Input({
      rotulo: "Data Inicial: ",
      nome: "start-date",
      id: "start-date",
      tipo: "date"
    }).executar();
    const inputDataFinal = new Input({
      rotulo: "Data Final: ",
      nome: "end-date",
      id: "end-date",
      tipo: "date"
    }).executar();
    conteiner.append(inputDataInicial, inputDataFinal);
    return conteiner;
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
    div.classList.add("container", "sales");

    div.append(barraCaminho, secaoProdutos, secaoItensPorPagina, this.modalCadastro);
    return div;
  }
}
