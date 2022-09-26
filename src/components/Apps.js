import './Apps.css'
import React, { useState, useEffect } from 'react'
import List from './List'
import ListItem from './ListItem'


function Apps() {
    // When ever our List got updated we have to store in our local storage

    const [todos, setTodos] = useState([])
    const Local_Storage_Key = 'react-app-todos';

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key))
        if (storedTodos) setTodos(storedTodos);
    }, [])
    useEffect(() => {
        if (todos.length > 0)
            localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
    }, [todos]);

    // deleting Items in the list

    function deleteItem(id) {
        const arr = todos.filter((todo) => todo.id != id)
        setTodos(arr)
        localStorage.setItem(Local_Storage_Key, JSON.stringify(arr))
    }

    // going to modify the input part
    const [TodoInput, setTodoInput] = useState('')
    const HandleInput = (e) => {
        setTodoInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if (!TodoInput.trim()) {
            alert('please fill the valid schedule todo')
            return;
        }
        setTodos([{ id: Math.random() * 1000000, text: TodoInput }, ...todos])
        setTodoInput('')
    }


    return (
        //  .map is dynamic rendering :
        // Depending on the size of the data we are rendering components
        <div className='Appscontainer'>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
                {/*<div className="hedding">Enter your schedule Todo </div>}


                {/* Input Form For The App */}
                
                    <div className="form">
                        <input type="text" name='name' className='inputs' autoComplete='off'
                            onChange={HandleInput} value={TodoInput} required
                        />
                        <label htmlFor="name" className='label-name'><span className='content-name'>Add Todo</span></label>

                    </div>

                <div className="submit">
                    <button className='buttons' onClick={handleSubmit} >Submit</button>
                </div>


                <div className="list-container">
                    <div className="list">
                        <br />
                        {todos.map(todo => (
                            <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Apps
