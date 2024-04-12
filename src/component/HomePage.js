
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import '../movie/movieList.css'

function MovieListComp(){
    const [movieList, SetMovieList] = useState([])
    const [searchKey,setSearchKey] = useState('')
    const handleChange=(e)=>{
        setSearchKey(e.target.value)
  }

    useEffect(()=>{
        getMovieList()
    },[searchKey])
    const getMovieList=()=>{
        axios.get(`http://www.omdbapi.com/?s=${searchKey}&apikey=aab08961`)
        .then(response=>{
            SetMovieList(response.data)
            
        })
        console.log(movieList?.Response,"console.log(response.data.Response);");
    }
    return(
        <div >
             <ul className="nav nav-pills flex-column mt-4 m-2 ">
            <li className="input-group mb-4">
              <span className="input-group-text">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                 >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input onChange={(e)=>handleChange(e)}
                className="form-control"
                type="search"
                placeholder="search..."
              />
            </li>
            </ul>  
          {
            movieList?.Response ?
            movieList?.Search && movieList.Search.map((item,idx) =>
           
                //            <div class="card" style="width: 18rem;">
                //   <img class="card-img-top" src="..." alt="Card image cap">
                //   <div class="card-body">
                //     <h5 class="card-title">Card title</h5>
                //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //     <a href="#" class="btn btn-primary">Go somewhere</a>
                //   </div>
                // </div>
                        <div key={idx} style={{ display: 'flex', justifyContent: 'start', margin: '2px', width: '18rem' }}>
                            <div className='card'>
                                <img className='card-img-top' src={item.Poster} alt='movie' width={350} />
                            <div className='card-body'>
                                <h6 className='card-title'>{item.Title}</h6>
                            </div>
                            </div>
                        </div>
                        ):
                        <h1>No Data</h1>
          }
    </div>
    )
}
export default MovieListComp;