function Todo(props){
  return (
    <div style={{ textDecoration: props.todo.isCompleted ? "line-through" : "", color: props.todo.isRed ? "red": "" }} className="todo">
      {props.todo.text}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>Completed</button>
        <button onClick={() => props.removeTodo(props.index)}>Remove</button>
        <button onClick={() => props.redify(props.index)}>Redify</button>
      </div>
    </div>
  )
}

export default Todo;