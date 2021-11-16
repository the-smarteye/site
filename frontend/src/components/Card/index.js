import React from "react";
import "./index.css";
import Modal from "./Modal";

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
          <Modal className="__modal" title={props.title} img={props.imgA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Modal>
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
          <Modal className="__modal" title={props.title} img={props.imgA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Modal>
        </div>
      </div>
    );
  }
};

export default Card;
