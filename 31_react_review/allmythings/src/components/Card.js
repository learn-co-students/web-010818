import React from "react";

const Card = ({ result }) => {
  const { name, description, url, embed } = result;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description.substring(0, 70)}...</p>
        <a href={embed} target="_blank" className="btn btn-primary">
          See Video
        </a>
      </div>
    </div>
  );
};

export default Card;
