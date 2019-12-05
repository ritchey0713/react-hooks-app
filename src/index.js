import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from "./components/NoteApp"

import * as serviceWorker from './serviceWorker';

// const App = (props) => {
//   // const array = useState(0)
//   let [count, setCount] = useState(props.count)
//   let [text, setText] = useState(props.text)

//   useEffect(() => {
//     document.title = count
//     console.log("test")
//   }, [count])

//   useEffect(() => {
//     console.log("this runs once")
//   }, [])


//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }

//   const reset = () => {
//     setCount(count = 0)
//   }

//   const textChange = (e) => {
//     setText(e.target.value)
//   }

//   return (
//     <div>
//       <p>current {text}: {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input onChange={textChange} value={text}/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0,
//   text: "count"
// }




ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
