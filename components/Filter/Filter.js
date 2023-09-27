import React from 'react'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filter = ({setSpecies,setGender,setStatus,setPageNumber}) => {
  let clear=()=>{
    setSpecies("");
    setGender("");
    setStatus("");
    setPageNumber(1);
    window.location.reload(false)
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-4 fs-4 mb-2">Filter</div>
      <div onClick={clear} style={{ cursor: "pointer" }} className="text-center text-decoration-underline text-primary mb-4"> Clear Filters</div>
      
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />

        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
        

      </div>
    </div>
  )
}

export default Filter