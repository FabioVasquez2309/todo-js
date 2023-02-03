import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

//poner los valores del localStore 
todoList.todos.forEach( todo => crearTodoHtml( todo ) ); //forma larga cuando hay mas de un argumento
// todoList.todos.forEach(crearTodoHtml); //forma corta cuando hay un solo argumento

