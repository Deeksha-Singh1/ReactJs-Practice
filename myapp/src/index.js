import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './reactRedux/App';
import store from './reactRedux/store';
import {Provider} from 'react-redux'

store.subscribe (()=> console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}> <App /></Provider>
   
  
);

