import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitems from './Noteitems';

const Notes = () => {
    const context = useContext(NoteContext);
    const [notes, setnotes] = useState(context.notes)
  return (
    <div className="row mb-3">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
      return <Noteitems notes = {note}/>;
    })}
    </div>
  )
}

export default Notes
