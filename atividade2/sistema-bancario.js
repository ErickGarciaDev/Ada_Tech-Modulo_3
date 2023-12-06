class Cliente {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.contas = []
    }

    adicionarConta(conta) {
        this.contas.push(conta)
    }
}

class Conta {
    constructor(cliente, saldo = 0.0) {
        this.cliente = cliente
        this._saldo = saldo
    }

    deposito(valor) {
        this._saldo += valor
    }

    saque(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor
            return true
        } else {
            console.log("Saldo insuficiente.")
            return false
        }
    }

    consultaSaldo() {
        return this._saldo
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, saldo = 0.0, limite = 500.0) {
        super(cliente, saldo)
        this.limite = limite
    }

    saque(valor) {
        if (valor <= this._saldo + this.limite) {
            this._saldo -= valor
            return true
        } else {
            console.log("Limite de saque excedido.")
            return false
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, saldo = 0.0, taxaJuros = 0.01) {
        super(cliente, saldo)
        this.taxaJuros = taxaJuros
    }

    calcularJuros() {
        this._saldo += this._saldo * this.taxaJuros
    }
}

const cliente1 = new Cliente("João", 30)

const contaCorrente1 = new ContaCorrente(cliente1, 1000.0, 500.0)
const contaPoupanca1 = new ContaPoupanca(cliente1, 500.0, 0.01)

cliente1.adicionarConta(contaCorrente1)
cliente1.adicionarConta(contaPoupanca1)

contaCorrente1.deposito(200.0)
contaPoupanca1.deposito(100.0)

contaCorrente1.saque(300.0)
contaCorrente1.saque(800.0)

console.log("Saldo Conta Corrente:", contaCorrente1.consultaSaldo())
console.log("Saldo Conta Poupança:", contaPoupanca1.consultaSaldo())

contaPoupanca1.calcularJuros()

console.log("Saldo Conta Poupança após juros:", contaPoupanca1.consultaSaldo())