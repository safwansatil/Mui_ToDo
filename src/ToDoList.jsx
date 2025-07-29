import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { Box, Typography } from '@mui/material';


const getInitialData = ()=> {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
    return data;
} 

export default function ToDoList(){
    const [todos, setTodos] = useState(getInitialData);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t=> t.id !== id)
        })
    }
    const handleToggle = (id) => () => {
    const newTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
};

    const addTodo = (text) =>{
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}]
        })
    }

    return (
        <Box sx={{display: 'flex', justifyContent: "center", flexDirection:"column", alignItems:"center", m:3}}>
            <Typography variant='h2' component='h1' sx={{flexGrow:1}}>
                ToDo
            </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} handleToggle={handleToggle} removeTodo = {()=>removeTodo(todo.id)} />
      ))}
            <ToDoForm addTodo={addTodo} />
        </List>
        </Box>
    );
}

