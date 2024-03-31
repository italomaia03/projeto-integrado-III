import { ProdutoService } from "./service/produto.service.js";
import { produtos } from "./db/dados.db.js"; 
import { Modal } from "./view/elements/modal/modal.view.js";
import { ProdutosView } from "./view/produtos/produtosView.view.js";

const main = document.querySelector("main");
const div = document.querySelector(".container");
const iframe = document.querySelector(".painel");
const produtoBtn = document.querySelector("#products-button");
const acessoRapidoBtn = document.querySelector("#quick-access-btn");
const cadastrarBtn = document.getElementById("new-product");
const avaliarBtn = document.getElementById("view-product");
const atualizarBtn = document.getElementById("update-product");
const deletarBtn = document.getElementById("delete-product");
const listaProdutosConteiner = document.getElementById("products-list");

const produtoService = new ProdutoService(produtos);

const propsModalProduto = {
  tituloModal: "Cadastrar Produto",
  camposForm: [
    {
      nome: "Nome do Produto",
      tipo: "text",
      id: "nomeProduto",
      classe: "product-field"
    },
    {
      nome: "Foto",
      tipo: "file",
      id: "fotoProduto"
    },
    {
      nome: "Classificação do Produto",
      tipo: "text",
      id: "classificacaoProduto",
      classe: "product-field"
    },
    {
      nome: "Marca do Produto",
      tipo: "text",
      id: "marcaProduto",
      classe: "product-field"
    },
    {
      nome: "Preço do Produto",
      tipo: "number",
      id: "precoProduto",
      classe: "product-field"
    }
  ],
  acao: (event) => {
    event.preventDefault();
    produtoService.cadastrar("Produto");
  }
};

const modalCadastro = new Modal(main, propsModalProduto);
const telaCadastro = modalCadastro.executar();

const produtosView = new ProdutosView(produtoService, {
  modal: telaCadastro
}).executar();

acessoRapidoBtn.addEventListener("click", () => {
  if(main.hasChildNodes()){
    main.lastChild.remove();
    main.appendChild(iframe);
  }
})

produtoBtn.addEventListener("click", () => {
  if(main.hasChildNodes()){
    main.lastChild.remove();
    main.appendChild(produtosView);
  }
})