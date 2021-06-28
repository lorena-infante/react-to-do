import React from 'react'
/*import { App } from '../App';*/

export function TodoItem({ todo }) {
    /*Traer los elementos que se llaman en el App.js dentro del array de todos*/
    const {id,task,completed} = todo;

    return (
        <li>{task}</li>
    )
    
}
