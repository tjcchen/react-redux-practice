import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  // todo: {id: 0, text: "aaa", completed: false}

  return (<ul>
    {
      todos && todos.length ? todos.map(todo =>
        (
          <Todo key={ `todo-${todo.id}` } { ...todo } />
        ) 
      ) :
      'Oooops, no todos!'
    }
  </ul>)
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
};

const mapStateToProps = (state) => {
  const todos = state.todo || [];
  return { todos };
};

export default connect(mapStateToProps)(TodoList);