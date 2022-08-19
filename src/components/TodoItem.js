import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

export default function TodoItem(props) {
    const {todo, removeTodo, completeTodo} = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row" }>
        {props.todo.text}
        <div className='iconsContainer'>
            <RiCloseCircleLine className='icon-cross' style={{marginRight: 5}} onClick={() => removeTodo(todo.id)}/>
            <BiCheckCircle className='icon-tick' onClick={() => completeTodo(todo.id)}/>
        </div>
    </div>
  )
}
