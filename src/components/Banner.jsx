import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Banner.css'


function Banner({fetchUrl}) {
    const [movie,setMovie] = useState({})
    const base_url = `https://image.tmdb.org/t/p/original/`;
    

    //fetchdata using async 
    const fetchData =async()=>{
      const {data}= await tmdbAxiosInstance.get(fetchUrl)
     console.log(data.results[Math.floor(Math.random()*data.results.length)]) //json data display in array
     setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);

    useEffect(()=>{
      fetchData()

    },[])

  return (
    <div className='banner-heading'>
            <h3 style={{color:'white',marginLeft:'90px'}}>Movies</h3>
    
        <div
        style={{
        height:"500px",
        width:"1200px",
        marginLeft:"150px",
        marginTop:"25px",
        backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'relative',
        borderRadius:'25px'}}
        >
            <div className='banner-content'>
                <h2>{movie.name}</h2>
                {/* <h2>{movie.overview}</h2> */}
            </div>
        </div>
    </div>
  )
}

export default Banner