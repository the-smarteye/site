import React from "react";
import "./index.css";

const Card = (props) => {
  if (props.imgB !== undefined) {
    return (
      <div className="card">
        <div className="__header">
          <img src={props.imgA} className="__imgA" alt="" />
          <img src={props.imgB} className="__imgB" alt="" />
        </div>
        <div className="__body">
          <h2 className="__title">{props.title}</h2>
          <p className="__description">{props.description}</p>
          <button className="__button">Veja Mais</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="__header">
          <img src={props.imgA} className="__imgA" alt="" />
        </div>
        <div className="__body">
          <h2 className="__title">{props.title}</h2>
          <p className="__description">{props.description}</p>
          <button className="__button">Veja Mais</button>
        </div>
      </div>
    );
  }
};

export default Card;
