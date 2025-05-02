import './App.css'
import { getPost } from './api'
import { useState, useEffect } from 'react'

function App() {

  useEffect(() => {
    getPost().then(posts => console.log(posts));
  }, []);
  

  return (
    <>
      
    </>
  )
}

export default App
