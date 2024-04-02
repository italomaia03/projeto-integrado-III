import { Botao } from "../elements/botao.view.js";

export class BotaoCriarEtiqueta {
  constructor(props) {
    this.props = props;
  }

  executar() {
    const botao = new Botao({
      tag: "button",
      classe: "action",
      id: "new-tag",
      tipoEvento: "click",
      acao: this.props.acao,
    }).executar();

    const scan = document.createElement("scan");
    const conteinerImg = document.createElement("div");
    const img = document.createElement("img");

    scan.innerText = "Criar Etiqueta";
    
    img.src = "assets/icons/Parking Ticket.png";
    img.alt = "Etiqueta";

    conteinerImg.classList.add("icon-container");
    conteinerImg.appendChild(img);
    
    botao.appendChild(conteinerImg);
    botao.appendChild(scan);

    return botao;
  }
}
