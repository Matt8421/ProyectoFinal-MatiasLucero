import React from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import { useCustomContext } from './Components/ContextManager/ContextProvider'
import {ProductCard} from './Components'
import { Cartpage, DetailPage, HomePage} from './Components/Screens'
import {Route, Routes } from 'react-router-dom'
import Contact from './Components/Screens/Contact/Contact'
import Footer from './Components/Footer/Footer'




const App = () => {
    
    return (
      <>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        <Footer/> 
      </>
    )
}

export default App



