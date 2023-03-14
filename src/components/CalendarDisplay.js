import Calendar from "react-calendar";
import {useState} from "react";
import 'react-calendar/dist/Calendar.css'; 

function CalendarDisplay () {
const [value, setValue] = useState(new Date());
const [isClicked, setIsClicked] = useState(false)

function onChange(nextValue) {
    setValue(nextValue);
  }

function onClickDay () {
    setIsClicked(!isClicked)
    console.log(value)
}


    return (
        <div>
        <Calendar 
        onChange={onChange}
        value={value}
        onClickDay={onClickDay}
        />
        <div>
            {isClicked ?
            <h3>{value} details</h3>:
            <div></div> }
        </div>
        </div>
    )
}

export default CalendarDisplay;