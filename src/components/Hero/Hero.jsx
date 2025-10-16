import React from 'react'
import girl from "../../images/girl.jpg"
import css from "./Hero.module.css"

const Hero = () => {
  return (
    <div>
    <section className={css.hero}>
      <div className={css.addv}>
        <p className={css.unlock}>Unlock your potential with the best<span className={css.partText}> language</span> tutors</p>
        <p className={css.embark}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
        <button className={css.button} type='button'>Get started</button>
      </div>
      <div>
        <img src={girl} alt='girl'/>
      </div>

    </section>

    <section className={css.statSection}>
      <div className={css.stats}>
        <p className={css.statNumber}>32,000 +</p>
        <p className={css.statText}>Experienced tutors</p>
      </div>
      <div className={css.stats}>
        <p className={css.statNumber}>300,000 +</p>
        <p className={css.statText} >5-star tutor reviews</p>
      </div>
      <div className={css.stats}>
        <p className={css.statNumber}>120 +</p>
        <p className={css.statText}>Subjects taught</p>
      </div>
      <div className={css.stats}>
        <p className={css.statNumber}>200 +</p>
        <p className={css.statText}>Tutor nationalities</p>
      </div>
    </section>
    </div>
  )
}

export default Hero
