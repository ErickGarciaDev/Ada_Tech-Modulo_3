class ConversorDeMoeda {
    constructor(taxaCambio) {
        this.taxaCambio = taxaCambio
    }

    converter(valor, moedaOrigem, moedaDestino) {
        if (moedaOrigem === 'BRL') {
            this.valorConvertido = valor / this.taxaCambio

            console.log(`valor convertido: ${this.valorConvertido} ${moedaDestino}`)
        } else {
            this.valorConvertido = valor * this.taxaCambio
            console.log(`valor convertido: ${this.valorConvertido} ${moedaDestino}`)

        }
    }
}

const conversorMoeda = new ConversorDeMoeda(5.0)
conversorMoeda.converter(200, 'Dólar', 'BRL')