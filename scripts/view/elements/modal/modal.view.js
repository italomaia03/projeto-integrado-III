import { ItemFormulario } from "./itemFormulario.view.js";

export class Modal {
    constructor(conteiner, props) {
        this.conteiner = conteiner;
        this.props = props;
    }

    mapearCampos() {
        const { camposForm } = this.props;
        return camposForm.map(campo => new ItemFormulario(campo).executar());
    }

    criarFormulario() {
        const form = document.createElement("form");
        const submitBtn = document.createElement("input");
        form.classList.add("modal-form");
        
        const campos = this.mapearCampos();

        campos.forEach(campo => form.appendChild(campo));

        submitBtn.value = "Salvar";
        submitBtn.type = "submit";
        submitBtn.classList.add("modal-button");
        
        form.appendChild(submitBtn);

        return form;
    }

    criarTitulo() {
        const { tituloModal } = this.props;
        const tituloConteiner = document.createElement("div");
        const titulo = document.createElement("h2");
        const fecharModalBtn = document.createElement("button");

        titulo.innerText = tituloModal;
        fecharModalBtn.innerText = "X";
        fecharModalBtn.classList.add("close-modal");

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

        this.conteiner.appendChild(modal);
        return modal;
    }
}