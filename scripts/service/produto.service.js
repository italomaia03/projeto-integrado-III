export class ProdutoService {
    produtoDatabase;

    constructor(produtoDatabase) {
        this.produtoDatabase = produtoDatabase;
    }

    listar(filtro) {
        if(filtro){
            return this.produtoDatabase.filter(filtro);
        }
        return this.produtoDatabase;
    }

    cadastrar(produto) {
        const numeroAleatorio = `${Math.floor(Math.random()*1000000)}`;
        if(numeroAleatorio.length < 7){
            numeroAleatorio.padStart(7, "0");
        }
        produto.idProduto = numeroAleatorio;
        this.produtoDatabase.push(produto);
        return "Produto cadastrado com sucesso!";
    }

    atualizar(idProduto, produto) {
        const indice = this.produtoDatabase.findIndex(produto => produto.idProduto === idProduto);
        this.produtoDatabase[indice] = produto;
        return "Produto atualizado com sucesso!";
    }

    buscarPorId(idProduto) {
        return this.produtoDatabase.find(produto => produto.idProduto === idProduto);
    }

    buscarPorNome(nome) {
        return this.produtoDatabase.find(produto => produto.nomeProduto.toLowerCase() === nome.toLowerCase());
    }

    deletar(idProduto) {
        const produto = this.buscarProduto(idProduto);
        const index = this.produtoDatabase.indexOf(produto);
        this.produtoDatabase.splice(index, 1);
        return "Produto deletado com sucesso!";
    }
}