import React, {useState, useEffect } from "react"

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y:0 })

  useEffect(() => {

    const handleMouseMouse = (e) => {
        setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    console.log("SETTING EVENT")
    // document.addEventListener("mousemove", (e) => {
    //   setPosition({
    //     x: e.pageX,
    //     y: e.pageY
    //   })
    // })
    document.addEventListener("mousemove", handleMouseMouse)

    return () => {
      document.removeEventListener("mousemove", handleMouseMouse)
    }
  
  }, [])

  
  return position
}

export default useMousePosition