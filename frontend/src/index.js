import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {store } from './redux/config/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider makes the Redux store available to any nested 
    components that need to access the Redux store.  */}
    <Provider store={store} > 
    <App />
    </Provider>
  </React.StrictMode>
);

