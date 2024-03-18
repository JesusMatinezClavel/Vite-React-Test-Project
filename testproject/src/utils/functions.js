export const validate = (type, value) => {
    switch (type) {
        case "nickName":
        case "firsName":
        case "lastName":
        case "name":
        case "surname":
        case "nick":
        case "nombre":
        case "apellido":
        case "apellidos":
        case "mote":
            if (value.length < 3) {
                return 'name has to have 3 characters minimum!'
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
        case "pwd":
        case "contraseña":
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
            if(passwordRegex.test(value)){
                return 'Password needs at leaste one lower-case, one upper-case and one number'
            }
            if(value<6||value>10){
                return 'Password needs to be between 6 - 10 characters'
            }

            return "";
    }
}