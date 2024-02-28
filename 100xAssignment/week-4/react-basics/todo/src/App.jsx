import { useState } from 'react'
import './App.css'
let global = 1;

function App() {
  const [input, setInput] = useState({title:'', desc: ''})
  const [todos, setTodos] = useState([])

  const inputChanges = (e)=>{
    const key = e.target.id;
    const value = e.target.value;
    setInput((prev)=>{
      return {...prev, [key]:value}
    })
  }
  const addTodo = (e)=>{
    e.preventDefault()
    const title = input.title;
    const desc= input.desc;
    setTodos((prev)=>{
      return [...prev, {global, title,desc}]
    })

    setInput({title:'', desc: ''})
    global++;
  }

  return (
    <>
      <input 
      type="text" 
      id='title'
      placeholder='Todo Title'
      value={input.title}
      onChange={inputChanges}
      />
      {' '} <br /><br />
      <input 
      type="text" 
      id='desc'
      placeholder='Todo Description'
      value={input.desc}
      onChange={inputChanges}
      />
      <br /> <br />
      <button onClick={addTodo}>Add Todo</button>
      <br /> <br />

      {
        todos.map((todo)=>{
          return (
            <div key={todo.id} id={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.desc}</div>
            </div>
          )
        })
      }
    </>
  )
}

export default App
