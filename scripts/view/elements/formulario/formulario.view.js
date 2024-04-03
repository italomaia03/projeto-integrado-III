export class Form {
    constructor(props) {
        this.props = props
    }

    executar() {
        const { id, classe, metodo, inputs, botoes } = this.props;
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
        botoes.forEach(botao => form.appendChild(botao));
        return form;
    }
}