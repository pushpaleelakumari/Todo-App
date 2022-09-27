import React from 'react'
import './ListItem.css'

function ListItem(props) {
    const handleDelete=()=>{
        props.deleteItem(props.id)
    }
    return (
        <div >
            <div className="todo-item">
                <p className='p-tag'>
                    {props.text}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" id='cross'
                 onClick={handleDelete}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
        </div>
    )
}

export default ListItem
