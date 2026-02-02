import React from 'react'
import css from "./TeacherCard.module.css";
import { Link } from 'react-router-dom';
import book from '../../../images/book.svg'
import star from '../../../images/star.svg'
import heart from '../../../images/heart.svg'


const TeacherCard = ({teacher}) => {
  const {avatar_url,name,surname,languages,lesson_info,conditions, levels,rating, price_per_hour,lessons_done}=teacher;
  return (
    <article className={css.cardContainer}>
    <div className={css.infoPart}>
      <div className={css.justPhoto}><div className={css.avatarWrapper}><img className={css.photo} src={avatar_url} alt='photo' width="96" height="96"></img></div>
      </div>
      <div className={css.noPhoto}>
      <div className={css.info}>
        <div className={css.names}>
        <p className={css.lang}>languages</p>
       </div>
        <div className={css.stats}>
        <div className={css.lessons_online}>
        <img src={book} alt='lessons book' width={16} height={16}/>
        <span className={css. online}>lessons online</span> | </div> 
        <div className={css.done_container}> <span className={css.lessons_done}>Lessons done: {lessons_done} </span> |</div>
        <div className={css.rating}>
        <img src={star} alt='star' width={16} height={16}/><span className={css.ratingText}>rating: {rating}</span> |</div>
        <span className={css.priceText}>price / 1 hour: {price_per_hour}</span>
        <div className={css.heartFrame}><img className={css.heart} src={heart} alt='heart' width={26} height={26}/></div>
        </div>
         
      </div>
       <p>{name} {surname}</p>
      <div className={css.numbers}>
      
        <p>speaks: {languages}</p>
        <p>lessons info:{lesson_info} </p>
        <p>conditions: {conditions}</p>
      </div>
      <Link to={`/teachers/${teacher.id}`}>Read more</Link>
      <div className={css.levelSection}>
        <p className={css.levels}>{levels}</p>
      </div>
      </div>
      </div>
      
      
    </article>
   
  )
}

export default TeacherCard
