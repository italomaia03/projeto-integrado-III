import { Botao } from "../botao.view.js";
import { ItemFormulario } from "./itemFormulario.view.js";

export class Modal {
    constructor(props) {
        this.props = props;
    }

    mapearCampos() {
        const { camposForm } = this.props;
        return camposForm.map(campo => new ItemFormulario(campo).executar());
    }

    criarFormulario() {
        const form = document.createElement("form");
        const botaoSalvarProps = {
            tag: "input",
            nome: "Salvar",
            tipo: "submit",
            classe: "modal-button",
            tipoEvento: "click",
            acao: (event) => {
                event.preventDefault();
                this.props.acao
            }
        };
        const botaoSalvar = new Botao(botaoSalvarProps).executar();
        form.classList.add("modal-form");
        
        const campos = this.mapearCampos();

        campos.forEach(campo => form.appendChild(campo));

        form.appendChild(botaoSalvar);
        form.method = "POST";

        return form;
    }

    criarTitulo() {
        const { tituloModal } = this.props;
        const tituloConteiner = document.createElement("div");
        const titulo = document.createElement("h2");
        const botaoProps = {
            tag: "button",
            nome: "X",
            tipo: "button",
            classe: "close-modal",
            tipoEvento: "click",
            acao: () => document.querySelector("dialog").close()
        };
        const fecharModalBtn = new Botao(botaoProps).executar();

        titulo.innerText = tituloModal;

        tituloConteiner.appendChild(titulo);
        tituloConteiner.appendChild(fecharModalBtn)
        tituloConteiner.classList.add("modal-header");
        
        return tituloConteiner;
    }

    executar() {
        const modal = document.createElement("dialog");
        const tituloModal = this.criarTitulo();
        const formModal = this.criarFormulario();

        modal.appendChild(tituloModal);
        modal.appendChild(formModal);

        modal.classList.add("modal");

        return modal;
    }
}