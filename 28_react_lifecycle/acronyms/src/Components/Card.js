import React from "react";
const Card = ({ url, title, description }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={url} alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
