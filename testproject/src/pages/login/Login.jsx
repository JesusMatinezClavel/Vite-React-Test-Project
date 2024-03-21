import { useState, useEffect } from "react";
import { CustomInput } from "../../common/customInput/customInput";
import './Login.css'
import { loginMe } from "../../services/apiCalls";
import { validate } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";


export const Login = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [credentialsError, setCredentialsError] = useState({
        emailError: "",
        passwordError: ""
    })

    const [errorMsg, setErrorMsg] = useState("")

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const checkError = (e) => {

        const credentialsError = validate(e.target.name, e.target.value)

        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: credentialsError
        })
        )
    }

    const backError = (e) => {
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: ""
        }))
    }

    const logMe = async () => {
        try {
            for (let key in credentials) {
                if (credentials[key] === "") {
                    throw new Error('Every field must be completed!')
                }
            }
            const fetched = await loginMe(credentials)
            setErrorMsg(fetched.message)

            const token = fetched.data[0]

            const decodedToken = decodeToken(token)

            const passport = {
                token,
                decodedToken
            }

            localStorage.setItem("passport", JSON.stringify(passport))

            setTimeout(() => {
                navigate("/")
            }, 1200)
        } catch (error) {
            setErrorMsg(error.message)
        }
    }

    return (
        < div className="loginDesign" >
            <div className="areaInputError">
                <div className="textError"></div>
                <CustomInput
                    className={"inputDesign"}
                    type={'email'}
                    name={'email'}
                    value={credentials.email || ""}
                    placeholder={'email'}
                    functionClick={(e) => backError(e)}
                    functionChange={(e) => inputHandler(e)}
                    functionBlur={(e) => checkError(e)}
                />
                <div className="textError">{credentialsError.emailError}</div>
            </div>
            <div className="areaInputError">
                <div className="textError"></div>
                <CustomInput
                    className={"inputDesign"}
                    type={'password'}
                    name={'password'}
                    value={credentials.password || ""}
                    placeholder={'password'}
                    functionClick={(e) => backError(e)}
                    functionChange={(e) => inputHandler(e)}
                    functionBlur={(e) => checkError(e)}
                />
                <div className="textError">{credentialsError.passwordError}</div>
            </div>
            <div className="inputDesign loginButton" onClick={logMe}>Log In!</div>
            <div className="textError">{errorMsg}</div>
        </div >
    )
}