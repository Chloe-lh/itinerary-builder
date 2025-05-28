//* renders a single days data
function Day(props){
    return(
        <div className="day">
            <h2 className="day-title">{props.title}</h2>
            <p className="day-text">{props.text}</p>
        </div>
    );
}
export default Day
