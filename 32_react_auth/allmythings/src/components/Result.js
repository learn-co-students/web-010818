import React from "react";

const Result = props => {
  let { name, type, description, url, embed } = props.result;

  const handleClick = () => {
    props.onAddResult(props.result);
  };

  return (
    <div>
      <div className="jumbotron">
        <h4 className="display-5">{name}</h4>
        <p className="lead">{description.substring(0, 100)}...</p>
        <hr className="my-4" />
        <div>
          <iframe
            width="560"
            height="315"
            src={embed}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <p className="lead">
          <button onClick={handleClick} className="btn btn-lg">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Result;
