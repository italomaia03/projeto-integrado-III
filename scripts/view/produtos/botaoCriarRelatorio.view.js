import { Botao } from "../elements/botao.view.js";

export class BotaoCriarRelatorio {
  constructor(props) {
    this.props = props;
  }

  executar() {
    const botao = new Botao({
      tag: "button",
      classe: "action",
      id: "new-report",
      tipoEvento: "click",
      acao: this.props.acao,
    }).executar();

    const scan = document.createElement("scan");
    const conteinerImg = document.createElement("div");
    const img = document.createElement("img");

    scan.innerText = "Gerar Relatório";
    
    img.src = "/assets/icons/Parking Ticket.png";
    img.alt = "Relatório";

    conteinerImg.classList.add("icon-container");
    conteinerImg.appendChild(img);
    
    botao.appendChild(conteinerImg);
    botao.appendChild(scan);

    return botao;
  }
}
