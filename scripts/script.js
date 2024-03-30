import { ProdutoService } from "./service/produto.service.js";
import { Tabela } from "./view/elements/tabela/tabela.view.js";
import { produtos } from "./db/dados.db.js"; 
import { AcoesTabela } from "./view/elements/tabela/acoesTabela.view.js";
import { Modal } from "./view/elements/modal/modal.view.js";

const main = document.getElementById("produtos");
const cadastrarBtn = document.getElementById("new-product");
const avaliarBtn = document.getElementById("view-product");
const atualizarBtn = document.getElementById("update-product");
const deletarBtn = document.getElementById("delete-product");
const listaProdutosConteiner = document.getElementById("products-list");

const produtoService = new ProdutoService(produtos);
const acoesProdutos = [
  {nome: "Analisar Produto", src: "../assets/icons/Analyze.png"},
  {nome: "Editar Produto", src: "../assets/icons/Create.png"},
  {nome: "Remover Produto", src: "../assets/icons/delete.svg"}
]

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
  ]
};

const modalCadastro = new Modal(main, propsModalProduto);
const telaCadastro = modalCadastro.executar();

const acoesTabelaProdutos = new AcoesTabela(acoesProdutos).executar(); 

const tabelaProdutos = new Tabela(
  ["Código", "Nome", "Foto", "Classificação", "Marca", "Preço", "Ações"],
  produtoService.listarProdutos(),
  acoesTabelaProdutos,
  listaProdutosConteiner
);

tabelaProdutos.render();

cadastrarBtn.addEventListener("click", () => {
  telaCadastro.showModal();
});

const fecharModalBtn = document.querySelector(".close-modal");

fecharModalBtn.addEventListener("click", () => {
  telaCadastro.close();
})