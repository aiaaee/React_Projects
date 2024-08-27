import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { AppProvider } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
      <AppProvider>
            <App/>
      </AppProvider>
);