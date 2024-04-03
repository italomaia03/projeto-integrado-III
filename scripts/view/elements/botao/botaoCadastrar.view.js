import { Botao } from "./botao.view.js";

export class BotaoCadastrar {
  constructor(props) {
    this.props = props;
  }

  executar() {
    const botao = new Botao({
      tag: "button",
      classe: "action",
      id: "new-product",
      tipoEvento: "click",
      acao: this.props.acao,
    }).executar();

    const scan = document.createElement("scan");
    const conteinerImg = document.createElement("div");
    const img = document.createElement("img");

    scan.innerText = this.props.nome;
    
    img.src = "assets/icons/Plus Math.png";
    img.alt = "Sinal de adição";

    conteinerImg.classList.add("icon-container");
    conteinerImg.appendChild(img);
    
    botao.appendChild(conteinerImg);
    botao.appendChild(scan);

    return botao;
  }
}
