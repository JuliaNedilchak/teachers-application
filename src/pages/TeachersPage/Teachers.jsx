import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeachers } from '../../redux/features/teachers/teachersSlice';

const Teachers = () => {
  const dispatch = useDispatch();
  const {items, status, error}=useSelector((state)=>state.teachers);
  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchTeachers());
    }
    
  }, [status,dispatch]);

  if (status==='loading') return <p>loading</p>;
  if (status==='failed') return <p>Error:{error}</p>;
  return (
    <ul>
      {items.map((t,index)=>(
        <li key={index}>
          {t.name} {t.surname}
        </li>
      )
      )}
    </ul>
  )
}

export default Teachers
