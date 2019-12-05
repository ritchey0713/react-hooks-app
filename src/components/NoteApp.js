import React, { useEffect, useReducer } from "react"
import notesReducer from "../reducers/notes"
import NoteList from "./NoteList"
import AddNoteForm from "./NoteForm"
import NotesContext from "../context/notes-context"

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, notesDispatch] = useReducer(notesReducer, [])
  

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"))

    if(notesData) {
      //fires as init once
      // setNotes(notesData)
      notesDispatch({ type: "POPULATE_NOTES", notes: notesData })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    //fires when the notes array is changed
  }, [notes])


  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <p> add note </p>
        <AddNoteForm />
    </NotesContext.Provider>
  )
}

export default NoteApp