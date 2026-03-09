import React from 'react'

const BookingForm = ({teacherName}) => {
  return (
    <div>
      <h2>Book trial session</h2>
      <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
      <div>
        <p>Your teacher</p>
        <p>{teacherName}</p>
      </div>
    </div>
  )
}

export default BookingForm
