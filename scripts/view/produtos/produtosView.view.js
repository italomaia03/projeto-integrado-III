import { BarraBusca } from "../elements/barraBusca.view.js";
import { AcoesTabela } from "../elements/tabela/acoesTabela.view.js";
import { Tabela } from "../elements/tabela/tabela.view.js";
import { BarraCaminho } from "../elements/barraCaminho.view.js";
import { BotaoAdicionarProduto } from "./botaoAdicionarProduto.view.js";
import { BotaoCriarEtiqueta } from "./botaoCriarEtiqueta.view.js";
import { BotaoCriarRelatorio } from "./botaoCriarRelatorio.view.js";

export class ProdutosView {
  constructor(service, modalCadastro) {
    this.service = service;
    this.modalCadastro = modalCadastro;
  }

  montarBarraCaminho() {
    return new BarraCaminho({
      aba: "Produtos",
      acao: () => console.log("Início"),
    }).executar();
  }

  montarSecaoAcoes() {
    const secao = document.createElement("section");
    const iconeTab = document.createElement("img");
    const iconeTabConteiner = document.createElement("div");
    const acoesConteiner = document.createElement("div");
    const botoes = this.montarBotoes();
    const barraBusca = new BarraBusca({
      placeholder: "Buscar produtos...",
      acao: (nome) => this.service.buscarPorNome(nome),
    }).executar();

    iconeTab.src = "../assets/icons/Trolley.png";
    iconeTab.alt = "Carrinho de Compras";

    iconeTabConteiner.appendChild(iconeTab);
    iconeTabConteiner.id = "trolley-icon";

    acoesConteiner.id = "actions-container";
    botoes.forEach((botao) => acoesConteiner.appendChild(botao));
    acoesConteiner.appendChild(barraBusca);
    secao.appendChild(iconeTabConteiner);
    secao.appendChild(acoesConteiner);
    secao.id = "actions";

    return secao;
  }

  montarSecaoPaginacao(itensPorPagina) {
    const secao = document.createElement("section");
    secao.id = "pagination";
    const totalPaginas = Math.ceil(this.service.listarProdutos().length / itensPorPagina);
    const props = ["Página: ", "1", " de ", totalPaginas];
    const conteudo = props.map((prop) => {
      const span = document.createElement("span");
      span.innerText = prop;
      return span;
    });
    conteudo.forEach((item) => secao.appendChild(item));
    return secao;
  }

  montarConteudo() {
    const acoesProdutos = [
      { nome: "Analisar Produto", src: "/assets/icons/Analyze.png" },
      { nome: "Editar Produto", src: "/assets/icons/Create.png" },
      { nome: "Remover Produto", src: "/assets/icons/delete.svg" },
    ];
    const secao = document.createElement("section");
    secao.id = "products-list";

    const tabelaProdutos = new Tabela(
      ["Código", "Nome", "Foto", "Classificação", "Marca", "Preço", "Ações"],
      this.service.listarProdutos(),
      acoesProdutos,
      secao
    );

    tabelaProdutos.render();
    return secao;
  }

  montarBotoes() {
    const botoes = [
      new BotaoAdicionarProduto({
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

  montarSecaoProdutos(itensPorPagina) {
    const produtos = document.createElement("section");
    produtos.classList.add("produtos");
    produtos.id = "products-content";
    const conteudo = [
      this.montarSecaoAcoes(),
      this.montarSecaoPaginacao(itensPorPagina),
      this.montarConteudo(),
    ];
    conteudo.forEach((item) => produtos.appendChild(item));
    return produtos;
  }

  executar() {
    const { itensPorPagina, secaoItensPorPagina } = this.montarSecaoItensPorPagina();
    const secaoProdutos = this.montarSecaoProdutos(itensPorPagina);
    const barraCaminho = this.montarBarraCaminho();
    const div = document.createElement("div");
    div.classList.add("container");

    div.append(barraCaminho, secaoProdutos, secaoItensPorPagina, this.modalCadastro);
    return div;
  }
}
