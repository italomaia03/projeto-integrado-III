export class ProdutoService {
    produtoDatabase;

    constructor(produtoDatabase) {
        this.produtoDatabase = produtoDatabase;
    }

    listarProdutos() {
        return this.produtoDatabase;
    }

    cadastrar(produto) {
        this.produtoDatabase.push(produto);
        return "Produto cadastrado com sucesso!";
    }

    atualizar(idProduto, produto) {
        const indice = this.produtoDatabase.findIndex(produto => produto.idProduto === idProduto);
        this.produtoDatabase[indice] = produto;
        return "Produto atualizado com sucesso!";
    }

    buscarProduto(idProduto) {
        return this.produtoDatabase.find(produto => produto.idProduto === idProduto);
    }

    deletar(idProduto) {
        const produto = this.buscarProduto(idProduto);
        const index = this.produtoDatabase.indexOf(produto);
        this.produtoDatabase.splice(index, 1);
        return "Produto deletado com sucesso!";
    }
}