import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import '../movie/movieList.css'
import { addMovieToFavorites } from "../Redux/slice";

function MovieListComp() {
  const [movieList, SetMovieList] = useState([]);
  const [searchKey, setSearchKey] = useState("Tom");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleFavourite = (imdbID) => {
    console.log(imdbID, "e");
    dispatch(
      addMovieToFavorites(
        movieList?.Search.find((item) => item.imdbID === imdbID)
      )
    );
  };
  useEffect(() => {
    getMovieList();
  }, [searchKey]);
  const getMovieList = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchKey}&apikey=aab08961`)
      .then((response) => {
        SetMovieList(response.data);
      });
  };
  return (
    <>
      <ul className="nav nav-pills flex-column my-4">
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
          <input
            onChange={(e) => handleChange(e)}
            value={searchKey}
            className="form-control"
            type="search"
            placeholder="search..."
          />
        </li>
      </ul>
     
        <div className="row gy-4 gap-4 flex-nowrap overflow-x-auto">
          {movieList?.Response ? (
            movieList?.Search &&
            movieList.Search.map((item, idx) => (
              <div
                key={idx}
                className="col" style={{width:250}}
              >
                  <div className="card position-relative shadow-sm border-0 " style={{width:250}}>
                  <div class="position-absolute top-0 start-0">
                    <button className="btn card bg-dark text-white p-1" onClick={(e) => handleFavourite(item.imdbID)}><i class="bi bi-plus"/></button>
                  </div>
                    <img
                      className="card-img-top img-fluid"
                      src={item.Poster}
                      alt="movie"
                      height={50}
                      style={{ maxHeight: 250 }}
                    />
                    <div className="card-body">
                      <h6 className="card-title text-truncate">{item.Title}</h6>
                      <p>({item.Year})</p>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => handleFavourite(item.imdbID)}
                      >
                        Add to Watchlists
                      </button>
                    </div>
                  </div>
              </div>
            ))
          ) : (
            <h1>No Data</h1>
          )}
      </div>
    </>
  );
}
export default MovieListComp;
