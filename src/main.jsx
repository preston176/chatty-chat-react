import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
