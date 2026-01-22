import React, { useState } from 'react'
import TeachersList from '../../components/Teachers/TeacherList/TeachersList'
import Filters from '../../components/Filters/Filters'

const Teachers = () => {
  const [filters,setFilters]=useState({
    languages:"all",
    levels:"all",
    price:"all",
  })
  return (
    <div>
    <Filters  filters={filters} 
        onChange={setFilters}/>
      <TeachersList filters={filters}
      />
    </div>
  )
}

export default Teachers
