import React from 'react'
import './App.css';
import Home from './Home'
import Meal from './Meal'
import Instructions from './Instructions.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal/:mealid' element={<Meal/>}/>
      <Route path='/meal/instructions/:detailsid' element={<Instructions/>}/>
     
    </Routes>
    </BrowserRouter>
    
  
  </div>
)
}

export default App;
