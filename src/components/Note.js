import React, { useContext } from "react"
import NotesContext from "../context/notes-context"
import useMousePosition from "../hooks/useMousePosition"

const Note = (props) => {
  const { notesDispatch } = useContext(NotesContext)
  const position = useMousePosition()
  

  const removeNote = (title) => {
    // setNotes(notes.filter(note => {
    //   return note.title !== title
    // }))

    notesDispatch({
      type: "REMOVE_NOTE",
      title: title
    })
  }

  
  // useEffect(() => {
  //   console.log("load notes comp")

  //   return () => {
  //     // fires on delete like componentDidUnmount
  //     console.log("cleaned up")
  //   }
  // }, [])

  return (
    <div>
      <h1>{ props.note.title }</h1>
      <p>{position.x}, {position.y}</p>
      <p>{ props.note.body }</p>
      <button onClick={() => removeNote(props.note.title)}>X</button>
    </div>
  )
}

export default Note