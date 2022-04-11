import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from "./components/Grid"


function App() {
  

  return (
  
    <div className='App'>
      <span className='heading'>PixelWar</span>
      <Grid colonnes={10} lignes={40}/>

    </div>

  )
}

export default App
