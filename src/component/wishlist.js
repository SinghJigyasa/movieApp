import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFromFavorites } from "../Redux/slice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.store);
  const dispatch = useDispatch();
  console.log(wishlist, "wishlist");
  const handleRemove = (id) => {
    console.log(id, "imdbID");
    dispatch(removeMovieFromFavorites(id));
  };
  return (
    <div className="movie-Style py-3">
      <div className="row">
        <div className="col-12">
          <div className="card card-body">
            <h6>wishlist</h6>
            <p></p>
          </div>
        </div>
        {wishlist.movies.map((item, idx) => (
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="card">
              <img
                className="card-img-top"
                src={item.Poster}
                alt="movie"
                width={350}
                style={{ maxHeight: 250 }}
              />
              <div className="card-body">
                <h6 className="card-title">{item.Title}</h6>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleRemove(item.imdbID)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
