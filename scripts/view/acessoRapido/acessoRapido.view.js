import { BarraCaminho } from "../elements/barraCaminho.view.js";

export class AcessoRapido {
  constructor(props) {
    this.props = props;
  }

  montarBarraCaminho() {
    return new BarraCaminho({
      aba: "Acesso Rápido",
    }).executar();
  }

  montarConteudo() {
    const { botoes } = this.props;
    const section = document.createElement("section");
    const div = document.createElement("div");
    section.classList.add("access-content");
    div.classList.add("images");

    botoes
      .map((botao) => {
        const conteiner = document.createElement("a");
        const image = document.createElement("img");
        const { classe, src } = botao;
        if (classe) {
          conteiner.classList.add(classe);
        }
        image.src = src;
        conteiner.appendChild(image);
        return conteiner;
      })
      .forEach((botao) => div.appendChild(botao));
    section.appendChild(div);
    return section;
  }

  executar() {
    const conteiner = document.createElement("div");
    const barraCaminho = this.montarBarraCaminho();
    const secao = this.montarConteudo();

    conteiner.append(barraCaminho, secao);
    conteiner.classList.add("container", "quick-access");
    return conteiner;
  }
}
