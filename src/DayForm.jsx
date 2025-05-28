import Day from './Day';
//* form for entering day details
function DayForm(){
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent default page refresh
        // Handle form submission logic here
        console.log("Form submitted");
        //TODO change day text based on input
        
    }
    return (
        <form className="day-form">
            <label>Enter Description:
                <input 
                    type="text" 
                    className="day-input" 
                    placeholder="Enter a description..." />
                    onChange={(e) => console.log(e.target.value)}
            </label>
            <button type="submit" className="day-submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}
export default DayForm;
