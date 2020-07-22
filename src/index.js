import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import IconfontGlobalStyle from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <IconfontGlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
