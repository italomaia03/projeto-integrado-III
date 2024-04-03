export class ItemTabela {
    constructor(dado){
        this.dado = dado;
    }

    executar(){
        const linhaEl = document.createElement("tr");
        this.dado.forEach(coluna => {linhaEl.appendChild(coluna)});
        return linhaEl;
    }
}