import React from 'react';
import styles from './search.module.scss';

const Search = ({setSearch,setPageNumber}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4'>
        <input placeholder='Search for Character' type="text" className={styles.input} onChange={e=>{
            setSearch(e.target.value)
            setPageNumber(1)
        }}/>
        <button className={`btn btn-primary fs-5 ${styles.btn}`} onClick={(e)=>{e.preventDefault()}}>Search</button>
    </form>
  )
}

export default Search