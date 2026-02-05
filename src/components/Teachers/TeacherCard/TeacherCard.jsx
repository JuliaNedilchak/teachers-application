import React, { useState } from 'react'
import css from "./TeacherCard.module.css";
import { Link } from 'react-router-dom';
import book from '../../../images/book.svg'
import star from '../../../images/star.svg'
import heart from '../../../images/heart.svg'


const TeacherCard = ({teacher}) => {
  const {avatar_url,name,surname,languages,lesson_info,conditions, levels,rating, price_per_hour,lessons_done}=teacher;
  const [isOpen, setIsOpen]=useState(false);
  return (
    <article className={css.cardContainer}>
    <div className={css.infoPart}>
      <div className={css.justPhoto}><div className={css.avatarWrapper}><img className={css.photo} src={avatar_url} alt='photo' width="96" height="96"></img></div>
      </div>
      <div className={css.noPhoto}>
      <div className={css.info}>
        
        <div className={css.stats}>
        <div className={css.names}>
        <p className={css.lang}>languages</p>
       </div>
        <div className={css.lessons_online}>
        <img src={book} alt='lessons book' width={16} height={16}/>
        <span className={css. online}>lessons online</span> | </div> 
        <div className={css.done_container}> <span className={css.lessons_done}>Lessons done: {lessons_done} </span> |</div>
        <div className={css.rating}>
        <img src={star} alt='star' width={16} height={16}/><span className={css.ratingText}>rating: {rating}</span> |</div>
        <span className={css.priceText}>price / 1 hour: {price_per_hour}</span>
        <div className={css.heartFrame}><img className={css.heart} src={heart} alt='heart' width={26} height={26}/></div>
        </div>
        <div className={css.nameCont}>
          <p className={css.nameTeacher}>{name} {surname}</p></div>
      </div>
      
      <div className={css.numbers}>
      
        <p className={css.start}>speaks: <span className={css.startText}>{languages.join(',')}</span></p>
        <p className={css.start}>lessons info: <span className={css.startText}>{lesson_info}</span> </p>
        <p className={css.start}>conditions: <span className={css.startText}> {conditions}</span></p>
      </div>
       {isOpen && 
       (<div>
       <p className={css.experience}>{teacher.experience} </p>
       <ul>
       <li>
        <div>
          <p>{teacher.reviews.map(review=> (
           <div><p>{review.reviewer_name}</p>
           <div><img src={star} alt='star' width={16} height={16}/><p>{review.reviewer_rating}</p></div></div>
          
          ))}</p>
        </div>
       </li>
</ul>
       </div>)}
      <button type='button' onClick={()=> setIsOpen(prev=> !prev)}>{isOpen? 'Read less' : 'Read more'}</button>
     
        <div className={css.levelSection}>{levels.map(level=>(
          <span className={css.levelItem} key={level}>{level}</span>
        ))}</div>
      
      </div>
      
      </div>
      
      
    </article>
   
  )
}

export default TeacherCard
