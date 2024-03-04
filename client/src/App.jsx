// import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Materials from './components/material';
import Add from './components/material/Add';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/materials/add' element={<Add />} />
        </Routes>
      </div>
    </>
  )
}

export default App
