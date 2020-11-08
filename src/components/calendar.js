import React from "react"
import "./calendar.css"
import Box from "./box"

const BOXES = {
    "1": "",
    "2": "Hello!",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": ""
}

const Calendar = () => {

    return (
    <>
    <h1>Merry Christmas</h1>    
    <div className="calendar">
        {Object.entries(BOXES).map((box) => (
            <Box key={box[0]} box={box[0]} content={box[1]} />
        ))}
    </div>

     </>
    )
}

export default Calendar