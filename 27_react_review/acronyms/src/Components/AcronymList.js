import React, { Component } from "react";
import AcronymCard from "./AcronymCard";
import uuid from "uuid";
const AcronymList = props => {
  const acronyms = props.acronyms.map(a => (
    <AcronymCard key={uuid()} acronym={a} />
  ));
  return (
    <div className="col-lg-8">
      <div className="acronym-list">{acronyms}</div>
    </div>
  );
};

export default AcronymList;
