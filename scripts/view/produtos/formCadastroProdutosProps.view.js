import { Botao } from "../elements/botao/botao.view.js";
import { Input } from "../elements/formulario/input.view.js";

const inputNomeProduto = {
  rotulo: "Nome do Produto",
  nome: "nomeProduto",
  id: "nomeProduto",
  classe: "product-field",
  tipo: "text",
};

const inputFotoProduto = {
  rotulo: "Foto do Produto",
  nome: "fotoProduto",
  id: "fotoProduto",
  classe: "product-field",
  tipo: "file",
};

const inputClassificacaoProduto = {
  rotulo: "Classificacao do Produto",
  nome: "classificacaoProduto",
  id: "classificacaoProduto",
  classe: "product-field",
  tipo: "text",
};

const inputMarcaProduto = {
  rotulo: "Marca do Produto",
  nome: "marcaProduto",
  id: "marcaProduto",
  classe: "product-field",
  tipo: "text",
};

const inputPrecoProduto = {
  rotulo: "Preco do Produto",
  nome: "precoProduto",
  id: "precoProduto",
  classe: "product-field",
  tipo: "number",
};

const botaoSalvarProps = {
  tag: "input",
  nome: "Salvar",
  tipo: "submit",
  classe: "modal-button",
};
const botaoSalvar = new Botao(botaoSalvarProps).executar();

const inputs = [
  inputNomeProduto,
  inputFotoProduto,
  inputClassificacaoProduto,
  inputMarcaProduto,
  inputPrecoProduto,
];
const inputsEl = inputs.map((input) => new Input(input).executar());

export const propsProduto = {
  classe: "modal-form",
  metodo: "POST",
  inputs: inputsEl,
  botao: botaoSalvar,
};