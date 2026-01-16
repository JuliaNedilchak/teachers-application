import React from 'react'
import TeachersList from '../../components/Teachers/TeacherList/TeachersList'
import Filters from '../../components/Filters/Filters'

const Teachers = () => {
  return (
    <div>
    <Filters/>
      <TeachersList/>
    </div>
  )
}

export default Teachers
