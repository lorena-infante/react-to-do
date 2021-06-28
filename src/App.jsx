import { div } from 'prelude-ls';
import React, {Fragment, useState, useRef} from 'react';
import { v4 as uuidv4} from 'uuid';
import { TodoList } from './components/TodoList';

export function App(){
    const [todos, setTodos] = useState([
        { id:1, task:'Tarea',completed: false },]);
    /*useRef es un hook de react que identidica (como un id en html) una referencia para poder llamarla y operar con ella*/
    const todoTaskRef = useRef();
    const handleTodoAdd = () => {
        /*Aquí llamo a la referencia del input para que el botón la pueda agarrar*/
        const task= todoTaskRef.current.value;
        /*Comprobamos que el input no esté vacío */
        if (task === '') return;
        /*Si no está vacío entonces utilizar setTodos. Al añadirle una funcuón a este hook de estado lo que se logra es poder ingresar al estado previo del elemento. Así funciona React */
        setTodos((prevTodos)=>{
            return[...prevTodos, { id:uuidv4(), task, completed:false }];
        })

    }
    return (
        /*Fragment permite englobar todo el contenido que debería ir dentro del div que se está llamando en el body, para facilitar más adelante los estilos de css*/
        <Fragment> 
            <TodoList todos={todos}/>
            <input ref ="todoTaskRef"type="text" placeholder="Ingresa tarea aquí"/>
            <button id="add" onClick={handleTodoAdd}>➕</button>
            <button id="remove">❌</button>

        </Fragment> 
    
    );
}