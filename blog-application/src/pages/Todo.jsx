import React, { useState } from 'react'

function Todo() {

    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const todoInput = document.createElement('p')
        const descInput = document.createElement('p');
        const container = document.querySelector('.container')
        
        todoInput.innerText = todo;
        descInput.innerText = description;
        
        container.appendChild(todoInput);
        container.appendChild(descInput);

        

    }


  return (
    <div>

        <h1>Todo List</h1>


        <div>
            <label htmlFor="task">Title</label><br></br>
            <input type="text" name="task" id="task" onChange={(e) => setTodo(e.target.value)} /><br></br>
        </div>


        <div>
            <label htmlFor="description">Description</label><br></br>
            <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} /><br></br>
        </div>


        <button onClick={handleSubmit}>
            Submit
        </button>



        <div className='container'>
            
        </div>

    </div>
  )
}

export default Todo