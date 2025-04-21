import { useState } from 'react'
import './App.css'
import Button from "./components/Button"
import Form from './components/sections/Form.jsx'
import Page from './components/sections/Page.jsx'

function App() {
  return (
    <>
    <div className='main'>
      <Form />
      <Page />
    </div>
    </>
  )
}

export default App
