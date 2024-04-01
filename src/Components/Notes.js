import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes} = context
  return (
    <>
    <AddNote/>
    <div className="row mb-3">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
      return <Noteitems key={note._id} notes = {note}/>;
    })}
    </div>
    </>
  )
}

export default Notes
