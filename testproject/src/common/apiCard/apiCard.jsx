import './apiCard.css'

export const ApiCard = ({name,species,image}) => {
    return(
        <div className="apiCardDesign">
            <div>{name}</div>
            <div>{species}</div>
            <div><img className='characterImg' src={image} alt={name}/></div>
        </div>
    )
}