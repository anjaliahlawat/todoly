import React from 'react';
import './sass/App.scss';
import Router from './component/Router'
// import configureStore from './store/configureStore'
// import { Provider } from 'react-redux'
// import Todo from './component/Todo';

// const store = configureStore()

function App() {
  return (
    <Router />
    // <Provider value={store}>
    //     <Todo />
    // </Provider>

  );
}

export default App;
