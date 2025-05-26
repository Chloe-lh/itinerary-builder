function Button({ onClick }){ // Accept onClick as a prop
    return(
        <button className="day-button" 
            onClick={onClick}>Add Day</button> // Use the passed onClick prop
    )
}
export default Button;
