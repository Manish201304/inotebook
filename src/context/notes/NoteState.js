import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitail = [
        {
            "_id": "6605d1bb8f3825e1189d94ddb2",
            "user": "660546dfc54fbfb142c7980b",
            "title": "Hello",
            "description": "This is my first notes",
            "tag": "Nothing",
            "date": "2024-03-28T20:23:23.528Z",
            "__v": 0
        },
        {
            "_id": "66079c2c4546ad2a13d834588a53",
            "user": "660546dfc54fbfb142c7980b",
            "title": "title",
            "description": "description",
            "tag": "tag",
            "date": "2024-03-30T04:59:24.805Z",
            "__v": 0
        },
        {
            "_id": "66079c2c46ad2a433413d834588a53",
            "user": "660546dfc54fbfb142c7980b",
            "title": "title",
            "description": "description",
            "tag": "tag",
            "date": "2024-03-30T04:59:24.805Z",
            "__v": 0
        }
    ]

    const [notes, setnotes] = useState(notesInitail)

    //Add a Note
    const addNote = (title, description, tag) => {
        console.log("adding a note")
        const note =  {
            "_id": "66079c2c46ad2a13d834588a53",
            "user": "660546dfc54fbfb142c7980b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-30T04:59:24.805Z",
            "__v": 0
        }
    
        setnotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = (id) => {
        console.log("deleting a note with" + id)
        const newNote = notes.filter((note)=>{return note._id!==id})
        setnotes(newNote)
    }

    //Edit a Note
    const editNote = () => {

    }
    return (            
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;