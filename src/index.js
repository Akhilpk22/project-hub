import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextsShares from './contexts/ContextsShares';
import TokenAuth from './contexts/TokenAuth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
     <ContextsShares>
        <TokenAuth>
           <BrowserRouter>
           <App />
           </BrowserRouter>
        </TokenAuth>
     </ContextsShares>
   
  </React.StrictMode>
);


