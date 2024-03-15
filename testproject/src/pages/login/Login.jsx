import { useState, useEffect } from "react";
import { CustomInput } from "../../common/customInput/customInput";
import './Login.css'
import { loginMe } from "../../services/apiCalls";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    console.log(credentials);

    const logMe = async () => {
        const fetched = await loginMe(credentials)
        // console.log(fetched);
    }

    const inputHandler = (e) => {
        //Asignación dinámica

        //Es ilegal modificar el estado en React directamente

        //Primero creamos una variable placeholder llamada prevState
        //prevState preserva el estado original, es una copia del original.
        setCredentials((prevState) => ({
            // res2: console.log(e.target.value),
            //aqui preservamos el estado mediante spread rest
            ...prevState,
            //si escribo en email, e.target.name valdrá.... email
            //si escribo en password, e.target.name valdrá.... password
            //al usar los corchetes, estamos entrando en la propiedad del objeto
            [e.target.name]: e.target.value,
        }));
    };

    return (
        < div className="loginDesign" >
            <CustomInput
                className="inputDesign"
                type='text'
                name='email'
                value={credentials.email}
                placeholder='email'
                functionChange={inputHandler}
            />,
            <CustomInput
                className="inputDesign"
                type='password'
                name='password'
                value={credentials.password || ""}
                placeholder='password'
                functionChange={inputHandler}

            />,
            <div className="inputDesign" id='loginButton' onClick={logMe}>Log In</div>
        </div >
    )
}