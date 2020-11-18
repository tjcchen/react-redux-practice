import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => {
  return (
    <li
      onClick={ onClick }
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      { text }
    </li>
  )
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;