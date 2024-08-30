import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import App from './Components/App';
import { AppProvider } from './Contexts/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
      <AppProvider>
            <App/>
      </AppProvider>
);