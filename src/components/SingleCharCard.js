import "../pages/AllChars/AllChars.css";
import React from "react";

const SingleCharCard = ({ handleClick, charDetails }) => {
  return (
    <div onClick={handleClick} className="charCard">
      <img className="cardImg" src={charDetails.image} alt="" />
      <div className="detailWrapper">
        <h2 className="charID">#{charDetails.id}</h2>
        <h2>{charDetails.name}</h2>
        <h3>{charDetails.species}</h3>
      </div>
    </div>
  );
};

export default SingleCharCard;
