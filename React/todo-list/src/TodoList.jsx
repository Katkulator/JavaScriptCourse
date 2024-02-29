import { useState } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";

const initialTodos = [
  { id: 123, text: "feed the cats", completed: false },
  { id: 124, text: "empty cat litter", completed: true },
  { id: 125, text: "vacuum clean the house", completed: false },
  { id: 126, text: "drink coffee", completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const removeTodo = (id) => {
    setTodos((oldItems) => {
      return oldItems.filter(t => t.id !== id)
    })
  }

  const toggleToDo = (id) => {
    setTodos((oldItems) => {
      return oldItems.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    })
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggle={() => toggleToDo(todo.id)} />
      ))}
    </List>
  )
}
