import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed }) => {
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      { text }
    </li>
  )
};

Todo.prototype = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;