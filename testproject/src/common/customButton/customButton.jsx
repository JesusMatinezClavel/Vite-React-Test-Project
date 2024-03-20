import './customButton.css'

export const CustomButton = ({ children, onClickMethod}) => {
    return (
        <div className="customButton" onClick={onClickMethod}>
            {children}
        </div>
    );
}