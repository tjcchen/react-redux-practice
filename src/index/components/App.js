import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../components/TodoList';

// React stateless component, please note its syntax
// () => (<input />);
const App = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;