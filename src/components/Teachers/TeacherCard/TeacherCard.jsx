import React from 'react'
import css from "./TeacherCard.module.css";
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
        <p>languages</p>
        <p>{name} {surname}</p>
        </div>
        <p>lessons online</p>
        <p>Lessons done: {lessons_done} </p>
        <p>rating: {rating}</p>
        <p>price / 1 hour: {price_per_hour}</p>
      </div>
      <div className={css.numbers}>
      
        <p>speaks: {languages}</p>
        <p>lessons info:{lesson_info} </p>
        <p>conditions: {conditions}</p>
      </div>
      <button className={css.button} type='button'>load more</button>
      <div className={css.levelSection}>
        <p className={css.levels}>{levels}</p>
      </div>
      </div>
      </div>
      
      
    </article>
   
  )
}

export default TeacherCard
