import { Produto } from "../model/produto.model.js";
import { Venda } from "../model/venda.model.js";

const produtos = [
    new Produto("0000001", "Vinho Padre Cícero", "assets/images/vinho_padre_cicero.png", "Bebida Alcoólica", "Vinhos LTDA", 4.99),
];

const vendas = [
    new Venda("0000001", 1, new Date("2023-12-18 16:34"), "Ciro Bottini", 4.99, true),
    new Venda("0000002", 10, new Date("2024-01-20 15:34"), "Chico de Otília", 4.99, false),
]

export {produtos, vendas}; 