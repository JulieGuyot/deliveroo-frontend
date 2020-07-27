import React from "react";

const Restaurant = (props) => {
  return (
    <div className="restaurant">
      <div className="text-restaurant">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
      <img
        className="picture-restaurant"
        alt="photo de plat"
        src={props.image}
      />
    </div>
  );
};

export default Restaurant;
