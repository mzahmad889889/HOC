import React from 'react'
// import Userlist from './components/Userlist'
import './App.css'
import TodoList from './components/TodoList'
import SearchUser from './components/Userlist'
import SearchTodos from './components/TodoList'
export default function App() {
  return (
    <div>
      <h1>Higher Order Components</h1>
      <SearchUser/>
      <SearchTodos/>
    </div>
  )
}
