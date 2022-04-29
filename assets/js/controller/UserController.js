
class UserController {
    constructor() {
        
    }
    
    setAddressFromCep(cep) {
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: function(response) {
                console.log(response)
                $("#input-state").val(response.uf)
                $("#input-city").val(response.localidade)
                $("#input-address").val(response.logradouro)
            }
        })
    }
    
    createUserFromInput(userModel) { 
        const inputName = $("#input-name").val()
        const inputCpf = $("#input-cpf").val()
        const inputCep = $("#input-cep").val()
        const inputCity = $("#input-city").val()
        const inputAddress = $("#input-address").val()
        const inputEmail = $("#input-email").val()
        const inputPassword = $("#input-pw").val()
        const inputPwConfirm = $("#input-pw-confirm").val()

        if (this.isValidCpf(inputCpf) && this.isValidCep(inputCep) && this.isValidEmail(inputEmail) && this.isValidCep(inputCep) && this.isValidPassword(inputPassword, inputPwConfirm)) {
        }
        userModel.createUser(inputName, inputCpf, inputEmail, inputPassword, inputCep, inputAddress)

        console.log(this.setAddressFromCep(inputCep));

        
    }

    isValidEmail(str) {
        return str.indexOf("@") > 0 && str.indexOf(".") > 0 ? true : false
    }

    isValidCpf(str) {
        return str.length <= 11 ? true : false
    }

    isValidCep(str) {
        return str.length <= 8 && str.indexOf("-") > 0 ? true : false
    }

    isValidPassword(str, str1) {
        return str == str1 ? true : false
    }
}