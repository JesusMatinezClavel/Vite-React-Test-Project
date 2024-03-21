import './home.css'
import { CustomLink } from "../../common/customLink/customLink";

export const Home = () => {
    const token=true
    return (
        <div className="homeDesign">        
            <div className="title">Vite/React Test Project</div>
            <div className="description">This is a project to test different uses of the Vite/React technoloy</div>
        </div>
    )
}