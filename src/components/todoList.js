import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { add_element, toogle_todo } from './actions';


const Todo = ({completed, value, id, onClick}) => {
  return (
    <li className = { completed ? 'completed' : ''}>
    <div onClick = {onClick}>
      <ion-icon name="square-outline"></ion-icon>
      <ion-icon name="checkbox-outline"></ion-icon>
      <span>{value}</span>
    </div>
  </li>
  )
}

const sortTodos = (todos) => {
  return todos.sort(function (a, b) {
      if (b.completed) { return -1; }
      return 0;
    });
}

const functionFilter = (todos, filter, search) => {
  sortTodos(todos);
  switch(filter){
    case 'all':
      return todos.filter(todo => RegExp(search, 'i').test(todo.value));    
    case 'completed':
      return todos.filter(todo => todo.completed && RegExp(search, 'i').test(todo.value));    
    case 'active':
      return todos.filter(todo => !todo.completed && RegExp(search, 'i').test(todo.value));    
    default:
      return todos
    
  }
}

const TodoList = ({todos, toogle_todo}) => {
  return (
    <ul id="list">
      {todos.map( todo => <Todo key = {todo.id}  {...todo} onClick = { () => toogle_todo(todo.id)}/>)}
    </ul>
  );
}


function mapStateToPropsTodos(state) {
    return {
        todos: functionFilter(state.allTodos, state.visibilityReducer, state.searchReducer),
    };
}
function mapDispatchToPropsTodos(dispatch) {
    return bindActionCreators({add_element,toogle_todo}, dispatch);
}

const FilteredTodos = connect(
  mapStateToPropsTodos,
  mapDispatchToPropsTodos
)(TodoList)

export default FilteredTodos;
