import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitail = [
        {
            "_id": "6605d1bbf3825e189d94ddb2",
            "user": "660546dfc54fbfb142c7980b",
            "title": "Hello",
            "description": "This is my first notes",
            "tag": "Nothing",
            "date": "2024-03-28T20:23:23.528Z",
            "__v": 0
        },
        {
            "_id": "66079c2b46ada13d83588a51",
            "user": "660546dfc54fbfb142c7980b",
            "title": "Operating System",
            "description": "This is my first notes on OS",
            "tag": "OS",
            "date": "2024-03-30T04:59:23.554Z",
            "__v": 0
        },
        {
            "_id": "66079c2c46ada13d83588a53",
            "user": "660546dfc54fbfb142c7980b",
            "title": "Operating System",
            "description": "This is my first notes on OS",
            "tag": "OS",
            "date": "2024-03-30T04:59:24.805Z",
            "__v": 0
        }
    ]

    const [notes, setnotes] = useState(notesInitail)
    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;