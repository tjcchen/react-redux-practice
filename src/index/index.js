import React from 'react';
import { render } from 'react-dom';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <div>Index Page</div>
    );
  }
}

const rootElement = document.getElementById('root');

render(<App />, rootElement);