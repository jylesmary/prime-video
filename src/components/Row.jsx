import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl,isPoster}) {

    const[allMovis,setAllMovis] = useState();
    const base_url = `https://image.tmdb.org/t/p/original/`

    //fetchData using async
    const fetchData = async() => {
    const {data} = await tmdbAxiosInstance.get(fetchUrl)
      setAllMovis(data.results)
    }

    useEffect (()=>{
      fetchData()
    },[])


  return (
    <div className='row'>
        <h5 style={{color:'white'}}><span style={{color:'blue'}}>Prime</span> {title}   <span id='lst'>See more {'>'}</span> </h5> 
        <div className="movies-rw">
          {
            allMovis?.map(item=>(
              <img
              className={`${isPoster && 'movie-poster'} movie`}
              src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`}
              alt='noimg' />
            ))
          }
        </div>

    </div>
  )
}

export default Row