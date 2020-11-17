import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.less';

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

render(
<Provider store={ store }>
  <App />
</Provider>
, rootElement);