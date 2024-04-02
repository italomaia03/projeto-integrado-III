import { Botao } from "./botao.view.js";

export class BarraBusca {
    constructor(props) {
        this.props = props;
    }

    executar() {
        const form = document.createElement("form");
        const campoBusca = document.createElement("input");
        const iconeBusca = document.createElement("img");
        
<<<<<<< HEAD
        iconeBusca.src = "/assets/icons/Search.svg";
=======
        iconeBusca.src = "assets/icons/Search.svg";
>>>>>>> cc83e8c7f6105bb03b33c4483a7960bbd5cca7e2
        iconeBusca.alt = "Ícone de busca";
        
        campoBusca.type = "text";
        campoBusca.name = "busca";
        campoBusca.id = "search-input";
        campoBusca.placeholder = this.props.placeholder;

        const botaoSubmit = new Botao({
            tag: "button",
            tipo: "button",
            classe: "icon-container",
            tipoEvento: "click",
            acao: () => this.props.acao(campoBusca.value)
        }).executar();
        
        botaoSubmit.appendChild(iconeBusca);
        form.id = "search-field";
        form.appendChild(campoBusca);
        form.appendChild(botaoSubmit);
        return form;
    }
}