import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { AuthContextFacultyProvider } from './context/AuthContextFaculty';
import {SessionContextProvider} from './context/SessionContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextFacultyProvider>   
    <AuthContextProvider>
    <SessionContextProvider>
    <App />
    </SessionContextProvider>
    </AuthContextProvider>
    </AuthContextFacultyProvider>
  </React.StrictMode>
);

