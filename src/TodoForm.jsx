import { useState } from 'react'

function TodoForm(props){

  const submitHandler = (e) => {
    e.preventDefault();
    if(!value) return;
      props(value);
      setValue('');
  }

  const [value, setValue] = useState('')
  return (
    <form onSubmit={submitHandler}>
      <input className="input" type="text" name="todo" value={value} onChange={e => setValue(e.target.value)}/>
      <button type="submit">Add todo</button>
    </form>
  )
}

export default TodoForm;