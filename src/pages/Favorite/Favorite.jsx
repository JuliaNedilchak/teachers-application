import React from 'react'
import { useSelector } from 'react-redux'
import TeacherCard from '../../components/Teachers/TeacherCard/TeacherCard';


const Favorite = () => {
    const favorites=useSelector((state)=>state.favorites.favorites);
  return (
    <section>
        <h1>Favorites</h1>
        {favorites.length===0 ? (
            <p>No favorite teachers yet</p>
        ):(
            favorites.map((teacher)=>(
                <TeacherCard key={teacher.id} 
                    teacher={teacher}
                />
            )
       ) )}
    </section>
    
  )
}

export default Favorite
