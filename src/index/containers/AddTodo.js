import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="todo-form">
      <h4>Add Todo List</h4>
      <form
        onSubmit= { e =>
          {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }

            // eg: store.dispatch({type: 'counter/incremented'})
            dispatch(addTodo(input.value));

            input.value = '';
          }
        }
      >
        <input ref={ node => (input = node) } />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);