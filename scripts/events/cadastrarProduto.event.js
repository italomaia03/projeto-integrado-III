import { Produto } from "../model/produto.model.js";

export default function(service) {
    const produto = new Produto();
    let inputs = document.querySelectorAll(".product-field");
    inputs = Array.from(inputs);
    const valoreInputs = inputs.map(input => {return {valor: input.value, nome: input.name}});
    valoreInputs.forEach(valor => {
        if(valor.nome === "fotoProduto") {
            let novoCaminho = valor.valor.match(/\w+\.[a-z]+/);
            novoCaminho = novoCaminho ? `assets/images/${novoCaminho}`:"assets/icons/no-photo.svg";
            valor.valor = novoCaminho;
        }
        if(valor.nome === "precoProduto") {
            valor.valor = Number(valor.valor);
        }
        produto[valor.nome] = valor.valor
    });

    alert(service.cadastrar(produto));
}