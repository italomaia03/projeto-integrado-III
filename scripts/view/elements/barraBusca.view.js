import { Botao } from "./botao/botao.view.js";

export class BarraBusca {
    constructor(props) {
        this.props = props;
    }

    executar() {
        const form = document.createElement("form");
        const campoBusca = document.createElement("input");
        const iconeBusca = document.createElement("img");
        
        iconeBusca.src = "assets/icons/Search.svg";
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