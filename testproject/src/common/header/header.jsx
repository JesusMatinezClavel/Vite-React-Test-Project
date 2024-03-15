import { CustomLink } from '../customLink/customLink'
import './header.css'

export const Header = () => {
    const token = true
    return (
        <div className="headerDesign">
            <CustomLink title={"home"} destination={"/"} />
            {
                token
                    ? (
                        <div className='menu'>
                        <CustomLink title={"apitest"} destination={"/apitest"} />,
                        <CustomLink title={"counters"} destination={"/counters"} />,
                        <CustomLink title={"login"} destination={"/login"} />,
                        <CustomLink title={"register"} destination={"/register"} />
                        </div>
                    )
                    : (
                        <div className="menu">
                        <CustomLink title={"apitest"} destination={"/apitest"} />,
                        <CustomLink title={"counters"} destination={"/counters"} />,
                        <CustomLink title={"logout"} destination={"/home"} />
                        </div>
                    )
            }
        </div>
    )
}