function Day({ title, text }){
    return(
        <div className="day">
            <h2 className="day-title">{title}</h2>
            <p className="day-text">{text}</p>
        </div>
    );
}
export default Day
