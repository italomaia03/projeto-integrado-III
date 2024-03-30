export class Produto {
    idProduto;
    nomeProduto;
    fotoProduto;
    classificacaoProduto;
    marcaProduto;
    precoProduto;

    constructor(idProduto, nomeProduto, fotoProduto, classificacaoProduto, marcaProduto, precoProduto){
        this.idProduto = idProduto;
        this.nomeProduto = nomeProduto;
        this.fotoProduto = fotoProduto;
        this.classificacaoProduto = classificacaoProduto;
        this.marcaProduto = marcaProduto;
        this.precoProduto = precoProduto;
    }
}