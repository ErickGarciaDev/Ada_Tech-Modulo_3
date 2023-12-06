class Produto {
    constructor(nome, preco, estoque) {
        this._nome = nome
        this._preco = preco
        this._estoque = estoque
    }

    get nome() {
        return this._nome
    }

    get preco() {
        return this._preco
    }

    get estoque() {
        return this._estoque
    }

    reduzirEstoque(quantidade) {
        if (quantidade > 0 && quantidade <= this._estoque) {
            this._estoque -= quantidade
            return true
        } else {
            console.log("Quantidade indisponível em estoque.")
            return false
        }
    }
}

class ProdutoEletronico extends Produto {
    constructor(nome, preco, estoque, garantiaMeses) {
        super(nome, preco, estoque)
        this.garantiaMeses = garantiaMeses
    }
}

class ProdutoAlimenticio extends Produto {
    constructor(nome, preco, estoque, dataValidade) {
        super(nome, preco, estoque)
        this.dataValidade = dataValidade
    }
}

class Carrinho {
    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto, quantidade) {
        const produtoNoCarrinho = this.produtos.find((p) => p.produto === produto)
        if (produtoNoCarrinho) {
            produtoNoCarrinho.quantidade += quantidade
        } else {
            this.produtos.push({ produto, quantidade })
        }

        produto.reduzirEstoque(quantidade)
    }

    removerProduto(produto, quantidade) {
        const produtoNoCarrinho = this.produtos.find((p) => p.produto === produto)
        if (produtoNoCarrinho) {
            if (quantidade >= produtoNoCarrinho.quantidade) {
                this.produtos = this.produtos.filter((p) => p.produto !== produto)
            } else {
                produtoNoCarrinho.quantidade -= quantidade
            }

            produto.aumentarEstoque(quantidade)
        }
    }

    calcularTotal() {
        return this.produtos.reduce((total, item) => {
            return total + item.produto.calcularPrecoTotal(item.quantidade)
        }, 0)
    }
}

class Cliente {
    constructor(nome) {
        this.nome = nome
        this.carrinho = new Carrinho()
    }
}

const celular = new ProdutoEletronico("Smartphone", 1000.0, 10, 12)
const leite = new ProdutoAlimenticio("Leite", 3.5, 50, "2023-12-31")

const cliente1 = new Cliente("Alice")

cliente1.carrinho.adicionarProduto(celular, 2)
cliente1.carrinho.adicionarProduto(leite, 5)

console.log("Total no carrinho:", cliente1.carrinho.calcularTotal())