import { ProdutoService } from "./service/produto.service.js";
import { VendaService } from "./service/venda.service.js";
import { produtos, vendas } from "./db/dados.db.js";
import { Modal } from "./view/elements/modal/modal.view.js";
import { ProdutosView } from "./view/produtos/produtos.view.js";
import { Form } from "./view/elements/formulario/formulario.view.js";
import { formCadastroProdutosProps } from "./view/produtos/formCadastroProdutosProps.view.js";
import { produtosViewProps } from "./view/produtos/produtosViewProps.view.js";
import { VendasView } from "./view/vendas/vendas.view.js";
import { vendaViewProps } from "./view/vendas/vendasViewProps.view.js";
import { formCadastroVendasProps } from "./view/vendas/formCadastroVendasProps.view.js";
import mudancaPaginaEvent from "./events/mudancaPagina.event.js";
import { AcessoRapido } from "./view/acessoRapido/acessoRapido.view.js";
import { acessoRapidoProps } from "./view/acessoRapido/acessoRapidoProps.view.js";
import buscarBotaoInicioEvent from "./events/buscarBotaoInicio.event.js";

const produtoService = new ProdutoService(produtos);
const vendaService = new VendaService(vendas);

const modalCadastroProduto = new Modal({
  tituloModal: "Cadastro de Produtos",
  id: "cadastro-produtos",
  elementos: [new Form(formCadastroProdutosProps).executar()],
}).executar();

const modalCadastroVenda = new Modal({
  tituloModal: "Cadastro de Vendas",
  id: "cadastro-vendas",
  elementos: [new Form(formCadastroVendasProps).executar()],
}).executar();

const acessoRapidoView = new AcessoRapido(acessoRapidoProps).executar();
const produtosView = new ProdutosView(produtoService, modalCadastroProduto, produtosViewProps).executar();
const vendasView = new VendasView(vendaService, modalCadastroVenda, vendaViewProps).executar();
const main = document.querySelector("main");
main.appendChild(acessoRapidoView);

const acessoRapidoButtons = document.querySelectorAll(".quick-access-btn");
const vendasButtons = document.querySelectorAll(".sales-btn");
const produtoButtons = document.querySelectorAll(".products-btn");

produtoButtons.forEach(botao => botao.addEventListener("click", () => {
  mudancaPaginaEvent(main, produtosView);
  buscarBotaoInicioEvent(main, acessoRapidoView);
}));

vendasButtons.forEach(botao => botao.addEventListener("click", () => {
  mudancaPaginaEvent(main, vendasView);
  buscarBotaoInicioEvent(main, acessoRapidoView);
}));

acessoRapidoButtons.forEach(botao => botao.addEventListener("click", () => {
  mudancaPaginaEvent(main, acessoRapidoView)
}));