
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import '../movie/movieList.css'

function MovieListComp(){
    const [movieList, SetMovieList] = useState([])

    useEffect(()=>{
        getMovieList()
    },[])
    const getMovieList=()=>{
        axios.get(`http://www.omdbapi.com/?s=kabhi&apikey=aab08961`)
        .then(response=>{
            SetMovieList(response.data)
        })
    }
    console.log(movieList?.Search)
    return(
        <div >
           {movieList?.Search && movieList.Search.map((item,idx) =>
            <div key={idx} className='d-flex justify-content-start m-2' >
               <img src={item.Poster} alt='movie' width={350} />
            </div>
           )}
        </div>
    )
}
export default MovieListComp;