import React from 'react';
import './App.css';
import FilteredTodos from './components/todoList';
import AddTodoContainer from './components/addTodo';
import FilterContainer from './components/visibility';


const App = () => (
  <div className="App">
        <header className="App-header">
        </header>
        <div id="container">
          <div>
            <h1>To Do list</h1>
          </div>
          <div id="containerList">
            <FilterContainer />
            <div>
              <AddTodoContainer/>
              <FilteredTodos />
            </div>
          </div>
        </div>
      </div>
)


export default App;

