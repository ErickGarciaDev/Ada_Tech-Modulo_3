class ContadorDePalavras {
    constructor(frase) {
        this.frase = frase
    }

    contarPalavras() {
        this.count = 0
        for (let i = 0; i < this.frase.length; i++) {
            if (this.frase[i] === ' ') {
                this.count++
            }
        }
        console.log(`Número de palavras: ${this.count + 1}`)
    }
}

const novaFrase = new ContadorDePalavras('JavaScript é uma linguagem poderosa')
novaFrase.contarPalavras()