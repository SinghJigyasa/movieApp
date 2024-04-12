import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wishlist from './component/wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path='/' element={ <App />}/>
         <Route path='/watchlist' element={<Wishlist/>}/>
       </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

