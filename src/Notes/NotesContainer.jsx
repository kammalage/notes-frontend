import { useState, useRef } from "react"

const NotesContainer = () => {
    let [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState('');
    const noteID = useRef(0)
        
    const addNote = () => {
        setNotes([
            ...notes,
            {id: noteID.current++, text: inputText}
        ]);

        setInputText('');
    }

    const deleteNote = (id) => {
        console.log('note id:', id);
        console.log('notes:', notes)

    const remainingNotes = notes.filter(note => (note.id !== id))

    setNotes([
            ...remainingNotes
        ]);
    }
        return (<div>
            <div>
                <input value={inputText} onChange={ e=> setInputText(e.target.value)}></input>
                <button onClick={addNote}>Add Note</button>
            </div>
            {notes?.map(note => <li key={note.id}>{note.text} <button onClick={() => deleteNote(note.id)}>X</button></li>)}
        </div>)
}

export default NotesContainer;