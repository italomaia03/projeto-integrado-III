import cadastrarProdutoEvent from "../../../events/cadastrarProduto.event.js";

export class Form {
    constructor(props) {
        this.props = props
    }

    executar() {
        const { id, classe, metodo, inputs, botao, service } = this.props;
        const form = document.createElement("form");
        if (id) {
            form.id = id;
        }
        if (classe) {
            form.classList.add(classe);
        }
        if (metodo) {
            form.method = metodo;
        }

        inputs.forEach(input => form.appendChild(input));
        botao.addEventListener("click", (event) => {
            event.preventDefault();
            cadastrarProdutoEvent(service);
        });
        form.appendChild(botao);
        return form;
    }
}