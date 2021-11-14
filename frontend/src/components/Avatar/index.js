import React from 'react';
import "./index.css"

const Avatar = (props) => {
  return(
    <div className="avatar">
      <img src={props.avatar} className="__img" alt="" />
      <h2 className="__name">{props.name}</h2>
      <p className="__description">{props.description}</p>
    </div>
  );
}

export default Avatar;