import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../../redux/features/teachers/teachersSlice';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList = ({filters}) => {
    const dispatch=useDispatch();
    const teachers= useSelector(state=>
        state.teachers.items);
        console.log('techers from store:', teachers )
        console.log(teachers[2]?.id )
        console.log(teachers[3]?.price_per_hour, typeof teachers[3]?.price_per_hour)
    const status = useSelector(state=>state.teachers.status);
    const error = useSelector(state=> state.teachers.error);
    const STEP=3;
    const [visibleCount, setVisibleCount]=useState(STEP);
const filteredTeachers= teachers.filter((t)=>{
    const byLanguage=
    filters.languages==='all' || 
    (t.languages || []).includes(filters.languages)

    const byLevel = filters.levels==='all' || 
    (t.levels|| []).includes(filters.levels);

    const byPrice=
    filters.price==='all' || 
    Number(t.price_per_hour)<=Number(filters.price);

    return byLanguage && byLevel && byPrice;
})
useEffect(()=>{
    setVisibleCount(STEP);}, [filters.languages, filters.level, filters.price]
);

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


const visibleTeachers=filteredTeachers.slice(0,visibleCount);
const canLoadMore=visibleCount<filteredTeachers.length;
  return (
    <div>
     {visibleTeachers.map((teacher)=>(
        <TeacherCard key={teacher.id} teacher={teacher}/>
     )
     )}
    {canLoadMore &&(
        <button type='button' onClick={()=> setVisibleCount((prev)=> prev+STEP)}>Load more</button>
    )}
    </div>
  )
}

export default TeachersList
