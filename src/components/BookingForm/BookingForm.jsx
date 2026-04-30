import React from 'react'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import css from './BookingForm.module.css';
import {useForm} from 'react-hook-form'


const schema=yup.object({
  reason:
  yup.string().required('Choose a reason'),
  fullname:
  yup.string().required('Full name is required'),
  email:
  yup.string().email('Enter a valid email').required('Email is required'),
  phone:
  yup.string().required('Phone number is required'),
})
const BookingForm = ({teacherName, onClose}) => {
  const{
    register,
    handleSubmit,
    reset,
    formState:{errors, isSubmitting},
  }=useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit=(data)=>{
    console.log(data);
     reset();
  onClose();
  }
 
  return (
    <div>
      <h2 className={css.bookLesson}>Book trial session</h2>
      <p className={css.invText}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
      <div className={css.blockTeacher}>
        <p className={css.teacherText}>Your teacher</p>
        <p className={css.teacherName}>{teacherName}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className={css.reason}>What is your main reason for learning English?</h3>
        <div className={css.reasonsList}>
          <label>
          <input type='radio' {...register('reason')} value='Career and business'/>
          
          Career and business
          </label>
           <label>
          <input type='radio' {...register('reason')} value='Lesson for kids'/>
          Lesson for kids
          </label>
           <label>
          <input type='radio' {...register('reason')} value='Living abroad'/>
          Living abroad
          </label>
           <label>
          <input type='radio' {...register('reason')} value='Exams and coursework'/>
          Exams and coursework
          </label>
           <label>
          <input type='radio' {...register('reason')} value='Culture, travel or hobby'/>
          Culture, travel or hobby
          </label>
        </div>
          {errors.reason && <p>{errors.reason.message}</p>}

        <div>
          <input type='text' {...register('fullname')} placeholder='Full name' />
          {errors.fullname && <p>{errors.fullname.message}</p>}
          <input type='email' {...register('email')} placeholder='Email' />
          {errors.email && <p>{errors.email.message}</p>}
          <input type='tel' {...register('phone')} placeholder='Phone number' />
          {errors.phone && <p>{errors.phone.message}</p>}
          </div>
         <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Book'}</button>
        
      </form>
    </div>
  )
}

export default BookingForm
