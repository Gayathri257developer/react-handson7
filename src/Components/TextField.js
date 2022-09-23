import React from 'react'
import '../App.css'
const TextField = ({label,inputProps,onChange,value}) => {
  return (
   <>
   <div className="form-row align-items-center" style={{margin: "40px 100px"}}>
   <label>{label} </label>
    <input className="form-control" 
       {...inputProps}
       onChange={onChange}
       value={value}
       />
     
   </div>
   

   </>
  
  )
}

export default TextField;