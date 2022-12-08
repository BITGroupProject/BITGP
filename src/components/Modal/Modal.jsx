import React, { useContext } from "react";
import { applicationContext } from "../../context";

const Modal = () => {
  const { modalIsOpen } = useContext(applicationContext);

  return (
    <>
      <div className={`modal ${modalIsOpen ? "show" : ""}`}>modal</div>
    </>
  );
};

export default Modal;
