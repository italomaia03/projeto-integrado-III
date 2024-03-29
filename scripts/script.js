import { ProdutoService } from "./service/produto.service.js";
import { Tabela } from "./view/elements/tabela/tabela.view.js";
import { produtos } from "./db/dados.db.js"; 
import { AcoesTabela } from "./view/elements/tabela/acoesTabela.view.js";

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

const acoesTabelaProdutos = new AcoesTabela(acoesProdutos).executar(); 

const tabelaProdutos = new Tabela(
  ["Código", "Nome", "Foto", "Classificação", "Marca", "Preço", "Ações"],
  produtoService.listarProdutos(),
  acoesTabelaProdutos,
  listaProdutosConteiner
);

tabelaProdutos.render();

cadastrarBtn.addEventListener("click", () => {
  console.log("working...");
});
