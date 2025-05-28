import React, { useState } from 'react'
import './App.css'
import Day from './Day.jsx'
import DayForm from './DayForm.jsx'
import DayList from './DayList.jsx'

function App() {
  const [Days, setDay] = useState([]);
  const [formVisible, setFormVisible] = useState(false);


  const addDay = (data) => {
    const newDay = {
      title: `Day ${Days.length + 1}`,
      text: data || "This is a new day description."
    };
    setDay([...Days, newDay]); // copy current days and add the new one
    setFormVisible(false); // Hide the form after adding a day
  };

  // Function to delete a day
  const deleteDay = () =>{
    if (Days.length > 0) {
      setDay(Days.slice(0, -1)); // remove the last day
    }
  }

  return (
      <>
      <div>
          <button className="add-button" 
            onClick={() => setFormVisible(true)}>Add Day</button>
          {/* If formVisible is true, show form */}
          {formVisible && <DayForm onSubmit={addDay} />}
          <button className="delete-button" onClick={deleteDay}>Delete Day</button>
          <div className="days-container">
            {Days.map((day, index) => (
              <Day key={index} title={day.title} text={day.text} />
            ))}
          </div>
        </div>

      </>
  );
}

export default App
