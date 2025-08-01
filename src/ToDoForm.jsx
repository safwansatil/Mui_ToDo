import { Create } from "@mui/icons-material";
import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";


export default function ToDoForm({addTodo}){
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add ToDo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps = {{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="create todo"
                            edge="end"
                            type="submit"
                            >
                            <Create />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}


