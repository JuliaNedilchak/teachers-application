 import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Teachers from './pages/TeachersPage/Teachers';
import TeachersDetailsPage from './pages/TeachersDetailsPage/TeachersDetailsPage';
 
 const App = () => {
   return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/teachers" element={<Teachers/>}/>
       <Route path="/teachers/:id" element={<TeachersDetailsPage/>}/>
    </Routes>
   )
 }
 
 export default App;
 