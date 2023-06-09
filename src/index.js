import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-np1mr2qs4kiwvivc.us.auth0.com"
      clientId="okCpcEvsOkZ2qYDbCuNgTcCNv6k3MdP3"
      authorizationParams={{
        redirect_uri:"https://healthcaretest.netlify.app/homescreen"
      }}
    >

     <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
