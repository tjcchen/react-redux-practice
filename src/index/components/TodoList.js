import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  // todo: {id: 0, text: "aaa", completed: false}

  return (<ul>
    {
      todos && todos.length ? todos.map(todo =>
        (
          <Todo key={ `todo-${todo.id}` } todo={ todo } />
        ) 
      ) :
      'Oooops, no todos!'
    }
  </ul>)
};

const mapStateToProps = (state) => {
  const todos = state.todo || [];

  return { todos };
};

export default connect(mapStateToProps)(TodoList);