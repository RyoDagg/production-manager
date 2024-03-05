// import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Materials from './components/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import Products from './components/product';
import Productions from './components/production';
import Purchases from './components/purchase';

export const globalContext = createContext(null);


function App() {

  const navigateTo = useNavigate()

  return (
    <globalContext.Provider value={{ navigateTo }}>
      <Navbar />
      <div className="container-fluid mt-5">
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/materials/*' element={<Materials />} />
          <Route path='/products/*' element={<Products />} />
          <Route path='/productions/*' element={<Productions />} />
          <Route path='/purchases/*' element={<Purchases />} />
        </Routes>
      </div>
    </globalContext.Provider>
  )
}

export default App
