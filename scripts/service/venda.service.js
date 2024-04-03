export class VendaService {
    constructor(vendaDatabase) {
        this.vendaDatabase = vendaDatabase;
    }

    listar(filtro) {
        if (filtro) {
            return this.vendaDatabase.filter(filtro);
        }

        return this.vendaDatabase;
    }

    cadastrar(venda) {
        this.vendaDatabase.push(venda);
        return "Produto cadastrado com sucesso!";
    }

    atualizar(idVenda, venda) {
        const indice = this.vendaDatabase.findIndex(venda => venda.idVenda === idVenda);
        this.vendaDatabase[indice] = venda;
        return "Venda atualizada com sucesso!";
    }

    buscarPorId(idVenda) {
        return this.vendaDatabase.find(venda => venda.idVenda === idVenda);
    }

    deletar(idProduto) {
        const produto = this.buscarProduto(idProduto);
        const index = this.vendaDatabase.indexOf(produto);
        this.vendaDatabase.splice(index, 1);
        return "Produto deletado com sucesso!";
    }
}