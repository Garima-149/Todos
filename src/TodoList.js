import { useState, useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getinitialdata = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  }
  return data;
};
export default function TodoList() {
  const [todos, setTodos] = useState(getinitialdata);
  const removeTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((t) => t.id !== id);
    });
  };
  useEffect(() => {
    localStorage.setItem(todos, JSON.stringify(todos));
  }, [todos]);

  const Todo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: true },
      ];
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <Box
      height={500}
      width={400}
      my={4}
      mx={60}
      display="flex"
      justifySelf="center"
      alignItems="center"
      gap={4}
      p={2}
      /*sx={{ border: "2px solid grey" }}*/
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todos.id}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm Todo={Todo} />
      </List>
    </Box>
  );
}
