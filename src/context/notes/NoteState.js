import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitail = []
    const [notes, setnotes] = useState(notesInitail)
    //Add a Note
    const getAllNotes = async() => {
        // API calls
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
               "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNTQ2ZGZjNTRmYmZiMTQyYzc5ODBiIn0sImlhdCI6MTcxMTYyMTg1NX0.fC_JXChU5WoihJKNEexyFOPtj3vLCnc3wNDTU2uU3pY"
           }
       });
       const json = await response.json()
       console.log(json);
       setnotes(json);
    }
    //Add a Note
    const addNote = async(title, description, tag) => {
         // API calls
         const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNTQ2ZGZjNTRmYmZiMTQyYzc5ODBiIn0sImlhdCI6MTcxMTYyMTg1NX0.fC_JXChU5WoihJKNEexyFOPtj3vLCnc3wNDTU2uU3pY"
            },
            body: JSON.stringify({title, description, tag})
        });

        const note = {
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
        const newNote = notes.filter((note) => { return note._id !== id })
        setnotes(newNote)
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API calls
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNTQ2ZGZjNTRmYmZiMTQyYzc5ODBiIn0sImlhdCI6MTcxMTYyMTg1NX0.fC_JXChU5WoihJKNEexyFOPtj3vLCnc3wNDTU2uU3pY"
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =  response.json();

    //Edit logic client end
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
}
return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getAllNotes }}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;