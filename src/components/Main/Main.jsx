import React, { Component } from "react"
import { Route, Routes } from 'react-router-dom'
import Form from './Form/Form'
import Card from './Card/Card'

class Main extends Component {
  render() {
    return (
      <div>
          <h1>Form React Web</h1>
          <p>Esto es Main</p>
          <Routes>
           <Route element={<Form/>} path='/form'/>
           <Route element={<Card/>} path='/card'/>
          </Routes>

          
      </div>
    )
}
}
export default Main
