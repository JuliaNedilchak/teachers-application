import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../../redux/features/teachers/teachersSlice';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList = () => {
    const dispatch=useDispatch();
    const teachers= useSelector(state=>
        state.teachers.items);
    const status = useSelector(state=>state.teachers.status);
    const error = useSelector(state=> state.teachers.error);

    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchTeachers())
        }
    }, [status,dispatch]);

    if(status==='loading'){
        return <p>loading....</p>
    }
if(status==='failed'){
    return <p>Error: {error}</p>
}

  return (
    <div>
     {teachers.map((teacher,index)=>(
        <TeacherCard key={index} teacher={teacher}/>
     )
     )}
    </div>
  )
}

export default TeachersList
