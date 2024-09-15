import React from 'react'
import { CiSearch } from "react-icons/ci";

const FindButton1 = () => {
  return (
    <div>
        <div className=' '>
        <button className='FindButton1 btn btn-warning'><span className='find1icon'><CiSearch size={25}/></span> Find Property</button>
        </div>
        
    </div>
  )
}

export default FindButton1