import React from 'react';
import Router from './component/Router'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import './sass/App.scss';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore()

function App() {
  return (    
    <Provider store={store}>
        <Router />
    </Provider>

  );
}

export default App;
