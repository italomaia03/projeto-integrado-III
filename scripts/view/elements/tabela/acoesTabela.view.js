export class AcoesTabela {
    constructor(acoes) {
        this.acoes = acoes;
    }

    mapearIcones() {
        return this.acoes.map(acao => {
            const {nome, src} = acao;
            const imgEl = document.createElement("img");
            imgEl.src = src;
            imgEl.alt = nome;
            return imgEl;
        })
    }

    mapearBotoes() {
        const icones = this.mapearIcones();
        const botoes = icones.map(icone => {
            const botao = document.createElement("button");
            botao.appendChild(icone);
            return botao;
        });
        console.log(botoes);
        botoes.forEach(botao => botao.classList.add("icon-container"));
        return botoes; 
    }

    executar() {
        const botoes = this.mapearBotoes();
        const conteiner = document.createElement("div");
        conteiner.id = "product-actions";

        botoes.forEach(botao => conteiner.appendChild(botao));
        return conteiner;
    }
}