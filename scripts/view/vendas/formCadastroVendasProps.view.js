import { Botao } from "../elements/botao/botao.view.js";
import { Input } from "../elements/formulario/input.view.js";

const inputCaixaVenda = {
  rotulo: "Número do Caixa",
  nome: "caixaVenda",
  id: "caixaVenda",
  classe: "product-field",
  tipo: "text",
};

const inputDataVenda = {
  rotulo: "Data da Venda",
  nome: "dataVenda",
  id: "dataVenda",
  classe: "product-field",
  tipo: "date",
};

const inputVendedor = {
  rotulo: "Nome do Vendedor",
  nome: "vendedor",
  id: "vendedor",
  classe: "product-field",
  tipo: "text",
};

const inputTotalVenda = {
  rotulo: "Total da Venda",
  nome: "totalVenda",
  id: "totalVenda",
  classe: "product-field",
  tipo: "number",
};

const inputSituacaoVendaConsolidada = {
  rotulo: "Consolidada",
  nome: "situacaoVenda",
  id: "situacaoVendaConsolidada",
  classe: "product-field",
  tipo: "radio",
  valor: "true"
};
const inputSituacaoVendaCancelada = {
  rotulo: "Cancelada",
  nome: "situacaoVenda",
  id: "situacaoVendaCancelada",
  classe: "product-field",
  tipo: "radio",
  valor: "false"
};

const botaoSalvarProps = {
    tag: "input",
    nome: "Salvar",
    tipo: "submit",
    classe: "modal-button",
    tipoEvento: "click",
    acao: (event) => {
        event.preventDefault();
        console.log("Produto salvo com sucesso!");
    }
};
const botaoSalvar = new Botao(botaoSalvarProps).executar();

const inputs = [inputCaixaVenda, inputDataVenda, inputVendedor, inputTotalVenda, inputSituacaoVendaConsolidada, inputSituacaoVendaCancelada];
const inputsEl = inputs.map(input => new Input(input).executar());

const fieldset = document.createElement("fieldset");
const legend = document.createElement("legend");
legend.innerText = "Situação da Venda";
fieldset.appendChild(legend);

const radioInputs = inputsEl.splice(inputsEl.length - 2, inputsEl.length);
radioInputs.forEach(input => fieldset.appendChild(input));

inputsEl.push(fieldset);

export const formCadastroVendasProps = {
  classe: "modal-form",
  metodo: "POST",
  inputs: inputsEl,
  botoes: [botaoSalvar]
};