export class ItemFormulario {
    constructor(props) {
        this.props = props;
    }

    executar() {
        const campo = document.createElement("input");
        const rotulo = document.createElement("label");
        const conteiner = document.createElement("div");

        const {nome, tipo, id, classe} = this.props;

        campo.name = id;
        campo.type = tipo;
        campo.id = id;

        if(classe !== undefined) {
            campo.classList.add(classe);
        }

        rotulo.htmlFor = id;
        rotulo.innerText = nome;
        conteiner.appendChild(rotulo);
        conteiner.appendChild(campo);
        return conteiner;
    }
}