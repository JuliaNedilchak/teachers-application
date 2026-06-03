 import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Teachers from './pages/TeachersPage/Teachers';
import Favorite from './pages/Favorite/Favorite';
import Header from './components/Header/Header';


 
 const App = () => {
   return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
      <Route path ='/favorites' element={<Favorite/>}/>
       
    </Routes>
    </>
   )
 }
 
 export default App;
 