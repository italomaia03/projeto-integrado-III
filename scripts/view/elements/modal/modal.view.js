import { Botao } from "../botao/botao.view.js";

export class Modal {
    constructor(props) {
        this.props = props;
    }

    criarTitulo() {
        const { tituloModal, id } = this.props;
        const tituloConteiner = document.createElement("div");
        const titulo = document.createElement("h2");
        const botaoProps = {
            tag: "button",
            nome: "X",
            tipo: "button",
            classe: "close-modal",
            tipoEvento: "click",
            acao: () => document.getElementById(`${id}`).close()
        };
        const fecharModalBtn = new Botao(botaoProps).executar();

        titulo.innerText = tituloModal;

        tituloConteiner.appendChild(titulo);
        tituloConteiner.appendChild(fecharModalBtn)
        tituloConteiner.classList.add("modal-header");
        
        return tituloConteiner;
    }

    executar() {
        const { id, elementos } = this.props;
        const modal = document.createElement("dialog");
        const tituloModal = this.criarTitulo();
        modal.appendChild(tituloModal);
        if(elementos){
            elementos.forEach(elemento => {
                modal.appendChild(elemento)});
        }
        modal.classList.add("modal")
        modal.id = id;
        return modal;
    }
}