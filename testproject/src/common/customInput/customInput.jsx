import './customInput.css'

export const CustomInput = ({ design, type, name, value, placeholder, functionChange }) => {
    return (
        <div className="inputDesign">
            <input
                className={design}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={functionChange}
            />
        </div>
    )
}