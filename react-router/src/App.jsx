import { useState } from 'react'

import './App.css'
import Home from './Home'
import About from './About'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Nav from './Nav'
import Vans from './Vans'
import VanDescription from './VanDescription'
import Dashboard from './host/Dashboard'
import Reviews from './host/Reviews'
import Income from './host/Income'
import Hostlayout from './host/Hostlayout'

function App() {
  

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route element={<Nav/>} path='/'>
      <Route element={<Home/>} path='/home'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Vans/>} path='/vans'/>
      <Route element={<VanDescription/>} path='/vans/:id' />
      <Route element = {<Hostlayout/>} path='/host'>
        
      <Route element = {<Dashboard/>} path='dashboard'/>
      <Route element = {<Reviews/>} path='reviews'/>
      <Route element = {<Income/>} path='income'/>


      </Route>

    </Route>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
