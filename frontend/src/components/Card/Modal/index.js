import React, { useState } from "react";
import "./index.css";
import Stick from "../../../assets/stick.png"

const Modal = (props) => {
  const [show, setShow] = useState("none");

  const handleClick = () => {
    setShow("block");
  };

  const spanClick = () => {
    setShow("none");
  };
  return (
    <>
      <button onClick={handleClick} className="__myBtn">
        Veja Mais
      </button>
      <div className="modal" style={{ display: show }}>
        <div className="modal-content">
          <div className="head">
            <span onClick={spanClick} className="close">&times;</span>
            <h1 style={{ textAlign: "left", padding: 20, paddingLeft: 35 }}>
              {props.title}
            </h1>
          </div>
          <div className="grid">
            <div className="body">
              <img src={props.img} alt="" />
            </div>
            <div className="sticks">
              <img src={Stick} alt=""/>
              <img src={Stick} alt=""/>
              <img src={Stick} alt=""/>
              <img src={Stick} alt=""/>
            </div>
            <div className="names">
              <h2>Lorem Ipsum</h2>
              <h2>Lorem Ipsum</h2>
              <h2>Lorem Ipsum</h2>
              <h2>Lorem Ipsum</h2>
            </div>
          </div>
            <p style={{textAlign: "left",padding: 20,fontSize: "large",fontFamily: "Roboto",}}>{props.children}</p>
            <p style={{textAlign: "left",padding: 20,fontSize: "large",fontFamily: "Roboto",}}>{props.children}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
