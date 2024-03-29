export default function (produto, acoes) {
    let {fotoProduto, precoProduto, ...atributos} = produto;
    const imgEl = document.createElement("img");
    imgEl.src = fotoProduto;
    imgEl.alt = produto.nomeProduto;

    precoProduto = `R$${precoProduto}`.replace(/\./,",");
    
    atributos = Object.values(atributos);
    atributos.push(precoProduto);
    
    const colunas = atributos.map(atributo => {
            const coluna = document.createElement("td");
            coluna.innerText = atributo;
            return coluna;
        });
    
    const fotoColuna = document.createElement("td").appendChild(imgEl);
    const acoesProduto = document.createElement("td");
    acoesProduto.appendChild(acoes);
    colunas.splice(2,0,fotoColuna);
    colunas.push(acoesProduto);
    return colunas;
}