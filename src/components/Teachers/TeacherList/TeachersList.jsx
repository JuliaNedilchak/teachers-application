import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../../redux/features/teachers/teachersSlice';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList = () => {
    const dispatch=useDispatch();
    const teachers= useSelector(state=>
        state.teachers.items);
        console.log('techers from store:', teachers )
    const status = useSelector(state=>state.teachers.status);
    const error = useSelector(state=> state.teachers.error);
    const STEP=3;
    const [visibleCount, setVisibleCount]=useState(STEP);

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
const visibleTeachers=teachers.slice(0,visibleCount);
const canLoadMore=visibleCount<teachers.length;
  return (
    <div>
     {visibleTeachers.map((teacher,index)=>(
        <TeacherCard key={index} teacher={teacher}/>
     )
     )}
    {canLoadMore &&(
        <button type='button' onClick={()=> setVisibleCount((prev)=> prev+STEP)}>Load more</button>
    )}
    </div>
  )
}

export default TeachersList
