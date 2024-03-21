import './userProfile.css'
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { CustomInput } from '../../common/customInput/customInput';

const userToken = JSON.parse(localStorage.getItem("passport"))

export const UserProfile = ()=>{

    const navigate = useNavigate()

    const [storageToken, setStorageToken]=useState(userToken?.token)
    const [loadedData, setLoadedData]=useState(false)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        profileImg: "",
        bio: "",
        birthDate: "",
        email: "",
        passwordBody: ""
    })

    const [updateDataError, setUpdateDataError] = useState({
        firstNameError: "",
        lastNameError: "",
        nickNameError: "",
        profileImgError: "",
        bioError: "",
        birthDateError: "",
        emailError: "",
        passwordBodyError: ""
    })

    useEffect(()=>{

    },[userData])



    return (
        <div className="userProfileDesign">
                    <CustomInput
                        className={"profileDesign"}
                        type={"text"}
                        name={"firstName"}
                        value={userData.firstName || ""}
                        placeholder={"input firstName"}
                    />
        </div>
    )
}