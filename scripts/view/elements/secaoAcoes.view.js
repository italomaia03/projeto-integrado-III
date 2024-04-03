import { BarraBusca } from "./barraBusca.view.js";

export class SecaoAcoes {
  constructor(service, props) {
    this.service = service;
    this.props = props;
  }

  executar() {
    const secao = document.createElement("section");
    const iconeTab = document.createElement("img");
    const iconeTabConteiner = document.createElement("div");
    const acoesConteiner = document.createElement("div");
    const botoes = this.props.botoes;
    const barraBusca = new BarraBusca({
      placeholder: this.props.placeholder,
      acao: (valor) =>
        console.log(
          this.service.listar({
            atributo: this.props.atributo,
            valor,
          })
        ),
    }).executar();

    iconeTab.src = this.props.icone.caminho;
    iconeTab.alt = this.props.icone.alt;

    iconeTabConteiner.appendChild(iconeTab);
    iconeTabConteiner.id = this.props.icone.idIcone;

    acoesConteiner.id = "actions-container";
    botoes.forEach((botao) => acoesConteiner.appendChild(botao));
    acoesConteiner.appendChild(barraBusca);
    secao.appendChild(iconeTabConteiner);
    secao.appendChild(acoesConteiner);
    secao.id = "actions";

    return secao;
  }
}
