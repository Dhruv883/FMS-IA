import React from "react";
import "../styles/AllMoviesPage.css";
import image1 from "../assets/img1.jpg";

const Cards = (props) => {
  return (
    <div>
      <div className="cards">
        <div className="movieCard">
          <div className="image">
            <img src={image1} alt="movie" />
          </div>
          <div className="title">{props.title}</div>
          <div className="bookNow">
            <button>Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
