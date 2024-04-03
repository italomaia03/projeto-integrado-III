export class Botao {
    constructor(props) {
        this.props = props;
    }

    executar() {
        const { tag, nome, tipo, classe, id, tipoEvento, acao } = this.props;
        const botao = document.createElement(tag);

        if(tipo){
            botao.type = tipo;
        }
        
        if(tag === "input") {
            botao.value = nome;
        }

        if(nome) {
            botao.innerText = nome;
        }
        
        if(classe) {
            botao.classList.add(classe);
        }
        if(id) {
            botao.id = id;
        }
        
        botao.addEventListener(tipoEvento, acao);
        return botao;
    }   
}