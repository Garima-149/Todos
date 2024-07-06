import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList.js';
import Navbar from "./Navbar.js";
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar/>
      <h1 className='todos'>TODOS</h1>
      <TodoList/>
    </>
  );
}

export default App;
