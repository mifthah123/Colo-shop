import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return (
    <div
      className="backdrop"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={props.paymentHandler}
    />
  );
};

const ModalOverLay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElements = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop
          paymentHandler={props.paymentHandler}
          backdropClr={props.backDropClr}
        />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElements
      )}
    </div>
  );
};

export default Modal;
