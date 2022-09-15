import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/lib/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <PersistGate persistor={persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </BrowserRouter>
);


