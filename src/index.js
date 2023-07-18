import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from './components/changeTheme.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="452918435969-oo5je6vdg8h68e1g6srric7h4av5b7i4.apps.googleusercontent.com">
  <React.StrictMode>
  <ThemeProvider>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
