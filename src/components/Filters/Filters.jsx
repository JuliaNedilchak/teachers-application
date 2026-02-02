import React, { useMemo } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {setFilter,resetFilters} from '../../redux/features/filters/filtersSlice'

const Filters = () => {

  const dispatch=useDispatch();
  const filters=useSelector((state)=> state.filters);
  const teachers=useSelector((state)=> state.teachers.items)
const levelsOpt = useMemo(()=>{
  const all= teachers.flatMap((t)=>
    t.levels||[]
  );
  return ['all', ...Array.from(new Set(all))]
},[teachers])

const languageOpt=useMemo(()=>{
  const allLang=teachers.flatMap((t)=>
  t.languages|| []);
  return ['all', ...Array.from(new Set(allLang))]
},[teachers])
  const handleChange=(e)=>{
    const{name, value}=e.target;
    dispatch(setFilter({name,value}))
  }
  const handleReset=()=>{
    dispatch(resetFilters());
  }
  return (
    <div> <label htmlFor="languages"> languages</label>
      <select name='languages' value={filters.languages} id='languages' onChange={handleChange}>
     {languageOpt.map((lang)=>{
      return (<option key={lang} value={lang}>{lang==='all'? 'all':lang}</option>)
     })}
</select>
 <label htmlFor="levels"> levels of knowledge</label>
      <select name='levels' value={filters.levels} id='levels'  onChange={handleChange}>
     {levelsOpt.map((lvl)=>{
      return (<option key={lvl} value={lvl}>{lvl==='all'? 'all':lvl}</option>)
     })}
</select>
 <label htmlFor="price"> Price</label>
      <select name='price'  value={filters.price} id='price'  onChange={handleChange}>
     <option value="all">all</option>
      <option value="20">20 $</option>
       <option value="30">30 $</option>
        <option value="40">40 $</option>
</select>
<button type='button' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Filters
