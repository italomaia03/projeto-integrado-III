import { ProdutoService } from "./service/produto.service.js";
import { produtos } from "./db/dados.db.js"; 
import { Modal } from "./view/elements/modal/modal.view.js";
import { ProdutosView } from "./view/produtos/produtosView.view.js";
import { propsModalProduto } from "./view/elements/modal/modalCadastroProps.view.js";

const main = document.querySelector("main");
const iframe = document.querySelector(".painel");
const produtoBtn = document.querySelector("#products-button");
const acessoRapidoBtn = document.querySelector("#quick-access-btn");


const produtoService = new ProdutoService(produtos);

main.removeChild(iframe)
main.appendChild(iframe)

const modalCadastro = new Modal(propsModalProduto).executar();

Object.defineProperty(propsModalProduto, "acao", {
  value: () => {
    produtoService.cadastrar("Produto");
  },
  configurable: true
});

const produtosView = new ProdutosView(produtoService, modalCadastro).executar();

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