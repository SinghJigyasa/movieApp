import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wishlist from './component/wishlist';
import Login from './component/login';
import { Provider } from 'react-redux';
import {store} from './Redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
       <Routes>
         <Route path='/' element={ <Login />}/>
         <Route path='/home' element={<App/>}/>
         <Route path='/watchlist' element={<Wishlist/>}/>
       </Routes>
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

