import React from 'react'
import css from './BookingForm.module.css';
const BookingForm = ({teacherName}) => {
  return (
    <div>
      <h2>Book trial session</h2>
      <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
      <div>
        <p>Your teacher</p>
        <p>{teacherName}</p>
      </div>
      <div>
        <h3>What is your main reason for learning English?</h3>
        <div className={css.reasonsList}>
          <label>
          <input type='radio' name='reason' value='Career and business'/>
          Career and business
          </label>
           <label>
          <input type='radio' name='reason' value='Lesson for kids'/>
          Lesson for kids
          </label>
           <label>
          <input type='radio' name='reason' value='Living abroad'/>
          Living abroad
          </label>
           <label>
          <input type='radio' name='reason' value='Exams and coursework'/>
          Exams and coursework
          </label>
           <label>
          <input type='radio' name='reason' value='Culture, travel or hobby'/>
          Culture, travel or hobby
          </label>
        </div>
        <div>
          <input type='text' name='fullname' placeholder='Full name' />
          <input type='emai,' name='email' placeholder='Email' />
          <input type='tel' name='phone' placeholder='Phone number' />
        </div>
        <button type='button'>Book</button>
      </div>
    </div>
  )
}

export default BookingForm
