class Funcionario {
    constructor(nome, salarioBase) {
        this._nome = nome
        this._salarioBase = salarioBase
    }

    get nome() {
        return this._nome
    }

    get salarioBase() {
        return this._salarioBase
    }

    calcularSalario() {
        return this._salarioBase
    }
}

class Analista extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase)
        this._bonus = bonus
    }

    calcularSalario() {
        return super.calcularSalario() + this._bonus
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, nivel) {
        super(nome, salarioBase)
        this._nivel = nivel
    }

    calcularSalario() {
        return super.calcularSalario() + (this._nivel * 1000)
    }
}

class Gerente extends Funcionario {
    constructor(nome, salarioBase, participacaoLucros) {
        super(nome, salarioBase)
        this._participacaoLucros = participacaoLucros
    }

    calcularSalario() {
        return super.calcularSalario() + this._participacaoLucros
    }
}

class Departamento {
    constructor(nome, gerente) {
        this._nome = nome
        this._gerente = gerente
        this._funcionarios = []
    }

    adicionarFuncionario(funcionario) {
        this._funcionarios.push(funcionario)
    }

    calcularTotalSalarios() {
        let totalSalarios = 0
        this._funcionarios.forEach((funcionario) => {
            totalSalarios += funcionario.calcularSalario()
        })
        return totalSalarios
    }
}

const gerenteRH = new Gerente("Carlos", 5000.0, 2000.0)
const analista1 = new Analista("Ana", 3000.0, 500.0)
const desenvolvedor1 = new Desenvolvedor("Daniel", 4000.0, 2)

const rh = new Departamento("Recursos Humanos", gerenteRH)
rh.adicionarFuncionario(analista1)
rh.adicionarFuncionario(desenvolvedor1)

console.log("Total de salários no departamento de RH:", rh.calcularTotalSalarios())
