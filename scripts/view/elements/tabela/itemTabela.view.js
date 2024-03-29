export class ItemTabela {
    constructor(dado){
        this.dado = dado;
    }

    criarColunas(mapper) {
        return mapper(this.dado);
    }

    executar(mapper){
        const colunas = this.criarColunas(mapper);
        const linhaEl = document.createElement("tr");
        colunas.forEach(coluna => linhaEl.appendChild(coluna));
        return linhaEl;
    }
}