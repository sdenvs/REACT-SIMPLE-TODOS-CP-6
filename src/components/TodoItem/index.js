// Write your code here

import './index.css'

const TodoItem = prop => {
  const {todo, deleteFun} = prop
  const {id, title} = todo

  const deleteTodo = () => {
    deleteFun(id)
  }
  return (
    <li className="todo">
      <p>{title}</p>
      <button onClick={deleteTodo} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
