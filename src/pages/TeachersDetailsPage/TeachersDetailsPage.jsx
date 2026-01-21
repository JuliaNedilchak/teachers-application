import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const TeachersDetailsPage = () => {
    const {id}= useParams();
    const teacher=useSelector((state)=> state.teachers.items.find((t)=>t.id===id));
    if(!teacher) return
    <p>Teacher not found</p>
  return (
    <div>
     <h1>{teacher.name} {teacher.surname}</h1>
    </div>
  )
}

export default TeachersDetailsPage
