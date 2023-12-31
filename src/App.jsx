import { useState } from "react"

function App(){
  const [text,setText]=useState("")
  const [todo,setTodo]=useState([])

  function addTodo(event){
    event.preventDefault()
    setTodo([...todo,text])
    console.log(text)
    setText("")

  } 
  function deleteTodo(index) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

  function editTodo(index) {
    const updatedTodo = [...todo];
    const newText = prompt("Enter new text for the todo:", updatedTodo[index]);
    if (newText !== null) {
      updatedTodo[index] = newText;
      setTodo(updatedTodo);
    }
  }

  return (
    <>
  <h1>Hello World</h1>
  
  <h1>Todo App {text}</h1>
  <form onSubmit={addTodo}>
  <input type="text" placeholder="Enter your Todo" onChange={(e)=>setText(e.target.value)}
  value={text}></input>
  <button type="submit">Add Todo</button>
  </form>
  <ul>
    {todo.map((item,index)=>{
      return<li key={index}>{item}
        <button onClick={()=>editTodo(index)}>Edit</button>
        <button onClick={()=>deleteTodo(index)}>Delete</button>

      </li>
    })}
  </ul>
  </>
  )
}
export default App