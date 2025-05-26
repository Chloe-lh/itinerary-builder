import { useState } from 'react'
import './App.css'
import Day from './Day.jsx'
import Button from './AddButton.jsx'

function App() {
  const [Days, setDay] = useState([]);

  const addDay = () => {
    const newDay = {
      title: `Day ${Days.length + 1}`,
      text: 'This is a new day component.'
    };
    setDay([...Days, newDay]); // copy current days and add the new one
  };
  // Function to delete a day
  const deleteDay = () =>{
    if (Days.length > 0) {
      setDay(Days.slice(0, -1)); // remove the last day
    }
  }

  return (
      <>
        <button className="add-button" onClick={addDay}>Add Day</button>
        <button className="delete-button" onClick={deleteDay}>Delete Day</button>
        <div className="days-container">
          {Days.map((day, index) => (
            <Day key={index} title={day.title} text={day.text} />
          ))}
        </div>
      </>
  );
}

export default App
