import { Botao } from "./botao.view.js";

export class BarraCaminho {
    constructor(props) {
        this.props = props;
    }

    executar() {
        const { aba } = this.props;
        const secaoCaminho = document.createElement("section");
        secaoCaminho.id = "path";
        secaoCaminho.classList.add("produtos");
        const conteinerTexto = document.createElement("span");
        conteinerTexto.id = "path-container";
        const linkInicio = new Botao({
            tag: "button",
            nome: "Início",
            tipo: "button",
            id: "botao-inicio",
            tipoEvento: "click",
            acao: this.props.acao
        }).executar();
        conteinerTexto.appendChild(linkInicio);        
        if(aba) {
            const novaAba = document.createElement("span");
            novaAba.innerText = ` / ${aba}`;
            conteinerTexto.appendChild(novaAba);
        }
        secaoCaminho.appendChild(conteinerTexto);
        return secaoCaminho;
    }
}