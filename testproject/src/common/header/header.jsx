import { CustomLink } from '../customLink/customLink'
import './header.css'

const userToken = JSON.parse(localStorage.getItem("passport"))

export const Header = () => {
    console.log(userToken);
    return (
        <div className="headerDesign">
            <CustomLink title={"home"} destination={"/"} />
            {
                userToken
                    ? (
                        <div className='menu'>
                            <CustomLink title={"login"} destination={"/login"} />
                            <CustomLink title={"register"} destination={"/register"} />
                        </div>
                    )
                    : (
                        <div className="menu">
                            <CustomLink title={"Log Out"} destination={"/"} />
                            <CustomLink title={"Profile"} destination={"users/profile"} />
                        </div>
                    )
            }
        </div>
    )
}