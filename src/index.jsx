import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { Provider } from 'react-redux';
import store from './store';

// Get the root container from the HTML
const container = document.getElementById('root');

// Create a root using React 18's createRoot
const root = createRoot(container);

// Render the application with Redux Provider and React Router
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Start measuring performance
reportWebVitals();
