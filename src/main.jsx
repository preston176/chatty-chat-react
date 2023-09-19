import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';

const initialState = {
  // Your initial state goes here
};

const reducer = (state, action) => {
  // Your reducer logic goes here
};

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
