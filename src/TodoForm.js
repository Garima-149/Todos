import { useState} from "react";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material/";
import { IconButton } from "@mui/material/";


export default function TodoForm({ Todo }) {
  const [text, setText] = useState("");
  const handlerchange = (evt) => {
    setText(evt.target.value)
    };
    const handlesubmit =(e)=>{
        e.preventDefault();
        Todo(text);
        setText("");
    } 
    

  return (
      <ListItem>
          <form onSubmit={handlesubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={text}
        onChange={handlerchange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="create todo" edge="end" type="submit">
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
