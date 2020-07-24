import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}></Route>
        <Route path={`${process.env.PUBLIC_URL}/detail/:id`} component={Detail}></Route>
        <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}></Route>
        <Route path={`${process.env.PUBLIC_URL}/write`} component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
