 import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Teachers from './pages/TeachersPage/Teachers';
import Favorite from './pages/Favorite/Favorite';


 
 const App = () => {
   return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
      <Route path ='/favorites' element={<Favorite/>}/>
       
    </Routes>
   )
 }
 
 export default App;
 