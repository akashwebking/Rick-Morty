import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filter/Filter";
import Card from "./components/Cards/Card";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Episodes from './pages/Episodes';
import Location from './pages/Location'
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <BrowserRouter>
    <div className="App"></div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<CardDetails/>}/>
      <Route path='/episodes' element={<Episodes/>}/>
      <Route path='/episodes/:id' element={<CardDetails/>}/>
      <Route path='/location' element={<Location/>}/>
      <Route path='/location/:id' element={<CardDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}
const Home=()=> {
  let [pageNumber,setPageNumber]=useState(1);
  let [search,setSearch]=useState("");
  let [status,setStatus]=useState("");
  let [gender,setGender]=useState("");
  let [species,setSpecies]=useState("")
  let [fetchData,updateFetchData]=useState([]);
  let{info,results}=fetchData;

  let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(()=>{
    (async function(){
      let data=await fetch(api).then((res)=>res.json());
      updateFetchData(data);
    })()
  },[api])
  return (
    <div className='App'>
      <h1 className='text-center mb-3'>Characters</h1>
      {/* <Navbar/> */}
    
     
     <Search setSearch={setSearch} setPageNumber={setPageNumber}/>
     <div className="container">
      
      <div className="row">
          <Filter setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/" results={results}/>
          </div>
        </div>
      </div>
     </div>
     <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
