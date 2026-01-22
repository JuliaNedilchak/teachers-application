import React from 'react'

const Filters = ({filters, onChange}) => {

  const handleChange=(e)=>{
    const{name, value}=e.target;
    onChange({...filters,[name]:value});
  }
  return (
    <div> <label htmlFor="languages"> languages</label>
      <select name='languages' value={filters.languages} id='languages' onChange={handleChange}>
     
      <option value="French">French</option>
       <option value="English">English</option>
        <option value="German">German</option>
</select>
 <label htmlFor="levels"> levels of knowledge</label>
      <select name='levels' value={filters.levels} id='levels'  onChange={handleChange}>
     
      <option value="A1 Beginner">A1 Beginner</option>
       <option value="A2 Elementary">A2 Elementary</option>
        <option value="B1 Intermediate">B1 Intermediate</option>
</select>
 <label htmlFor="price"> Price</label>
      <select name='price'  value={filters.price} id='price'  onChange={handleChange}>
     
      <option value="20 $">20 $</option>
       <option value="30 $">30 $</option>
        <option value="40 $">40 $</option>
</select>
    </div>
  )
}

export default Filters
