export const validate = (type, value) => {
    switch (type) {
        case "nickName":
        case "name":
        case "surname":
        case "nick":
        case "nombre":
        case "apellido":
        case "apellidos":
        case "mote":
            if (!value){
                return 'You need a nickname!'
            }
            if (value.length < 2) {
                return 'name has to have 2 characters minimum!'
            }

                return "";

        case "email":
        case "mail":
        case "correo":
        case "correoElectronico":
        case "correoelectronico":
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(value)) {
                return 'email has no valid format!'
            }

            return "";

        case "password":
        case "passwordBody":
        case "pwd":
        case "contraseña":
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
            if (!passwordRegex.test(value)) {
                return 'Password needs at least: one lower-case, one upper-case and one number'
            }
            if (value < 6 || value > 10) {
                return 'Password needs to be between 6 - 10 characters'
            }

            return "";
    }
}