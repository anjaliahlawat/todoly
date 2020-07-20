import React from 'react';
import './sass/App.scss';
import Router from './component/Router'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';

const store = configureStore()

function App() {
  return (    
    <Provider store={store}>
        <Router />
    </Provider>

  );
}

export default App;
