import './apiCard.css'

export const ApiCard = ({key, name,species,image,clickFunction}) => {
    return(
        <div className="apiCardDesign" onClick={clickFunction}>
            <div><img className='characterImg' src={image} alt={name}/></div>
            <div className='personData'>{name}</div>
            <div className='personData'>{species}</div>
        </div>
    )
}