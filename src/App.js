import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
