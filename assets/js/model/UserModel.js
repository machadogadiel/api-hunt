class UserModel {
    constructor() {
        this.users = []
    }

    createUser(name, cpf, email, password, cep, street) {
        const newUser = {};

        newUser.name = name
        newUser.cpf = cpf
        newUser.email = email
        newUser.password = password
        newUser.cep = cep
        newUser.street = street

        this.users.push(newUser)

        return newUser
    }

    getUserByCPF(cpfstr) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].cpf == cpfstr) {
                return this.users[i]
            }
        }
    }

    getUsers() {
        return this.users
    }
}