import React from 'react'

const Filters = () => {
  return (
    <div> <label for="languages"> languages</label>
      <select name='languages' id='languages'>
     
      <option value="French">French</option>
       <option value="English">English</option>
        <option value="German">German</option>
</select>
 <label for="levels"> levels of knowledge</label>
      <select name='levels' id='levels'>
     
      <option value="A1 Beginner">A1 Beginner</option>
       <option value="A2 Elementary">A2 Elementary</option>
        <option value="B1 Intermediate">B1 Intermediate</option>
</select>
 <label for="price"> Price</label>
      <select name='price' id='price'>
     
      <option value="20 $">20 $</option>
       <option value="30 $">30 $</option>
        <option value="40 $">40 $</option>
</select>
    </div>
  )
}

export default Filters
