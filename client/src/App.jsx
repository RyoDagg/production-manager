// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Materials from './components/Materials';

function App() {

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <Materials />
      </div>
    </>
  )
}

export default App
