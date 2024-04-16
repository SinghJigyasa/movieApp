import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ViewDetailsModal = ({ show, onHide }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMoviesDetails();
  }, [show.emdId]);
  
  const getMoviesDetails = () => {
    axios
      .get(`http://www.omdbapi.com/?i=${show.emdId}&apikey=aab08961`)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  return (
    <Modal show={show.show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-danger text-center">Movie Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row gy-4">
          <div class="col-12 text-center">
            <img
              height={100}
              src={movieDetail.Poster}
              className="img-fluid rounded mx-auto"
              alt={movieDetail.Poster}
            />
          </div>
          <div className="col-12">
            <div className="">
              <h5 className=" h4 fw-bold ">
                {movieDetail.Title}({movieDetail.Year})
              </h5>
              <p className="fs-6"><span className="fw-medium">Genre: </span> {movieDetail.Genre}</p>
              <p className="card-text"><span className="fw-medium">Cast: </span> {movieDetail.Actors}</p>
              <p><span className="fw-medium">Release Date: </span>{movieDetail.Released}</p>
              <p>
                <span className="fw-medium">Writer & Director:</span>{" "}
                {`${movieDetail.Writer},${movieDetail.Director}`}
              </p>
              <p>
                <span className="fw-medium text-wrap">Plot: </span>
                {movieDetail.Plot}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
