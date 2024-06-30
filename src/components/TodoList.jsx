// import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const TodoList = ({data}) => {
    const todosrender = data.map((todo) => {
            return(
            <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
            )
        })


  return (
    <div>{todosrender}</div>
  )
}
const SearchTodos = HOC(TodoList, "todos")
export default SearchTodos;