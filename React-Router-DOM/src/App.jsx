import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'

const App = () => {

  // React Router Dom > Single page application banata hai
  // or isko use krne se page reload bhi nahi huta 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>


      </Routes>
    </div>
  )
}

export default App
