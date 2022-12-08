import React, { useContext } from "react";
import { applicationContext } from "../../context";
import "./modal.css"

const Modal = () => {
  const { modalIsOpen } = useContext(applicationContext);

  return (
    <>
      <div className={`modal ${modalIsOpen ? "show" : ""}`}></div>
    </>
  );
};

export default Modal;
