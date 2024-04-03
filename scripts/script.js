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

const main = document.querySelector("main");
const iframe = document.querySelector(".painel");
const produtoBtn = document.querySelector("#products-btn");
const acessoRapidoBtn = document.querySelector("#quick-access-btn");
const vendasBtn = document.querySelector("#sales-btn");

const produtoService = new ProdutoService(produtos);
const vendaService = new VendaService(vendas);

main.removeChild(iframe);
main.appendChild(iframe);

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

const produtosView = new ProdutosView(produtoService, modalCadastroProduto, produtosViewProps).executar();
const vendasView = new VendasView(vendaService, modalCadastroVenda, vendaViewProps).executar();

acessoRapidoBtn.addEventListener("click", () => {
  if (main.hasChildNodes()) {
    main.lastChild.remove();
    main.appendChild(iframe);
  }
});

produtoBtn.addEventListener("click", () => {
  if (main.hasChildNodes()) {
    main.lastChild.remove();
    main.appendChild(produtosView);
  }
});

vendasBtn.addEventListener("click", () => {
  if (main.hasChildNodes()) {
    main.lastChild.remove();
    main.appendChild(vendasView);
  }
});
