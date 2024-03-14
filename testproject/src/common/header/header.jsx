import { CustomLink } from '../customLink/customLink'
import './header.css'

export const Header = () => {
    return (
        <div className="headerDesign">
            <CustomLink
                title={"home"}
                destination={"/"}
            />
            <CustomLink
                title={"apitest"}
                destination={"/apitest"}
            />
            <CustomLink
                title={"counters"}
                destination={"/counters"}
            />
        </div>
    )
}