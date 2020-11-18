import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) => {
  // todo: {id: 0, text: "aaa", completed: false}

  return (<ul>
    {
      todos && todos.length ? todos.map(todo =>
        (
          <Todo key={ `todo-${todo.id}` } { ...todo } onClick={ () => toggleTodo(todo.id) } />
        ) 
      ) :
      'Oops, no todos!'
    }
  </ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const todos = state.todo || [];
  return { todos };
};

export default connect(mapStateToProps, { toggleTodo })(TodoList);