import './customInput.css'

export const CustomInput = ({ className, type, name, value, placeholder, functionClick, functionChange, functionBlur }) => {
    return (
            <input
            className={className}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            // emit, recibimos la funcion por props que está en el padre!
            onClick={functionClick}
            onChange={functionChange}
            onBlur={functionBlur}
            />
    )
}