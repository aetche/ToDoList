import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { add_element } from './actions'

const AddTodo = ({add_element}) => {
  let input;
  return (<div id="addTask">
            <button>     
              <ion-icon name="add"></ion-icon>
            </button>
            <form onSubmit = {(e) => {
          e.preventDefault();
          add_element(input.value)
          input.value = ''
        }}>
              <input type="text" placeholder="Add a task" value = {input} ref= {(n) => input = n }/>
              <button type="submit" value="Submit">
                <ion-icon name="checkmark"></ion-icon>
	            </button>
	          </form>
         </div>)
  }

function mapStateToPropsAddTodo(state) {
    return {
    };
}
function mapDispatchToPropsAddTodo(dispatch) {
    return bindActionCreators({add_element}, dispatch);
}

const AddTodoContainer = connect(
  mapStateToPropsAddTodo,
  mapDispatchToPropsAddTodo
)(AddTodo)

export default AddTodoContainer;