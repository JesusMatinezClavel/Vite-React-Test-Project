import { CustomInput } from '../../common/customInput/customInput';
import { CustomButton } from "../../common/customButton/customButton";
import { validate } from '../../utils/functions';
import './Register.css'
import { useState, useEffect } from "react";
import { registerMe } from '../../services/apiCalls';

export const Register = () => {

    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        profileImg: "",
        bio: "",
        birthDate: "",
        email: "",
        passwordBody: ""
    })

    const inputHandler = (e) => {
        setRegisterData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const [registerDataError, setRegisterDataError] = useState({
        firstNameError: "",
        lastNameError: "",
        nickNameError: "",
        profileImgError: "",
        bioError: "",
        birthDateError: "",
        emailError: "",
        passwordBodyError: ""
    })

    const checkError = (e) => {
        const registerError = validate(e.target.name, e.target.value)

        setRegisterDataError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: registerError
        }))
    }
    const backError = (e) => {
        setRegisterDataError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: ""
        })
        )
    }

    const [registerError, setRegisterError] = useState("")

    const register = async () => {
        try {
            for (let key in registerData) {
                if (registerData[key.nickName, key.email, key.password, key.birthDate] === "") {
                    throw new Error('Every field must be completed!')
                }
            }
            const fetched = await registerMe(registerData)
            setRegisterError(fetched.message)
        } catch (error) {
            setRegisterError(error.message)
        }
    }


    return (
        <div className="registerDesign">
            <div className="inputGrid">
                {/* first name */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"text"}
                        name={"firstName"}
                        value={registerData.firstName || ""}
                        placeholder={"input firstName"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.firstNameError}</div>
                </div>
                {/* last name */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"text"}
                        name={"lastName"}
                        value={registerData.lastName || ""}
                        placeholder={"input lastName"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.lastNameError}</div>
                </div>
                {/* nickname */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"text"}
                        name={"nickName"}
                        value={registerData.nickName || ""}
                        placeholder={"input nickName"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.nickNameError}</div>
                </div>
                {/* profile img */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"file"}
                        name={"profileImg"}
                        value={registerData.profileImg || ""}
                        placeholder={"input profileImg"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.profileImgError}</div>
                </div>
                {/* bio */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"textarea"}
                        name={"bio"}
                        value={registerData.bio || ""}
                        placeholder={"input bio"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.bioError}</div>
                </div>
                {/* birthdate */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"date"}
                        name={"birthDate"}
                        value={registerData.birthDate || ""}
                        placeholder={"Birthdate"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.birthDateError}</div>
                </div>
                {/* email */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"text"}
                        name={"email"}
                        value={registerData.email || ""}
                        placeholder={"input email"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.emailError}</div>
                </div>
                {/* password */}
                <div className="inputArea">
                    <CustomInput
                        className={"inputDesign"}
                        type={"password"}
                        name={"passwordBody"}
                        value={registerData.passwordBody || ""}
                        placeholder={"input password"}
                        functionClick={(e) => backError(e)}
                        functionChange={(e) => inputHandler(e)}
                        functionBlur={(e) => checkError(e)}
                    />
                    <div className="textError">{registerDataError.passwordBodyError}</div>
                </div>
            </div>
            <CustomButton onClickMethod={register}>Register!</CustomButton>
            <div className="textError">{registerError}</div>
        </div>
    )
}