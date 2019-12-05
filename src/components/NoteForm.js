import React, { useState, useContext } from "react"
import NotesContext from "../context/notes-context"

const AddNoteForm = () => {

  const { notesDispatch } = useContext(NotesContext)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState("")

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    // setNotes([
    //   ...notes,
    //   {
    //     title, 
    //     body
    //   }
    // ])
    notesDispatch({
        type: "ADD_NOTE", 
        note: {
          title, body
        }
    })

    setTitle("")
    setBody("")
  }

  const onChangeBody = (e) => {
    setBody(e.target.value)
  }


  return (
    <form onSubmit={onSubmitForm}>
          <input value={title} onChange={onChangeTitle}/>
          <textarea value={body} onChange={onChangeBody}/>
          <button>Add note</button>
        </form>
  )
}

export default AddNoteForm
