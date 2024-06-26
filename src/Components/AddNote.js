import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title:"", description:"", tag:""})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{
        setnote({...note, [e.target.name]: e.target.value});
    }
    return (
        <div className="container my-3">
            <h1>Add a note</h1>
            <form className="container my-3 ">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name= "title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
