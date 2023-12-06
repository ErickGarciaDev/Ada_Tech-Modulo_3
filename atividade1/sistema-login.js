class SistemaDeLogin {
    cadastrarUsuario(email, password) {
        this.email = email
        this.password = password

        return { email: this.email, password: this.password }
    }


    static realizarLogin(user, password) {
        if (user.password === password) {
            SistemaDeLogin.exibirMensagemPersonalizada('usuário logado com sucesso')
        } else {
            SistemaDeLogin.exibirMensagemPersonalizada('Usuário ou senha inválidos')
        }
    }

    static exibirMensagemPersonalizada(message) {
        console.log(message)
    }
}

const sistemaDeLogin = new SistemaDeLogin()

const usuario1 = sistemaDeLogin.cadastrarUsuario('Erick', '123456')

SistemaDeLogin.realizarLogin(usuario1, '123456')

