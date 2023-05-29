import styles from "./InfoModal.module.css";
import { useState } from "react";
import Button from "../button/Button";
import ReactDom, { createPortal } from "react-dom";

const InfoModal = ({ setVisibility }) => {
  const Backdrop = () => {
    return <div className={styles.backdrop} onClick={setVisibility}></div>;
  };
  const ModalOverlay = () => {
    return (
      <div className={styles.modal}>
        <p>
          Este proyecto fue desarrollado usando una DB local estática y una DB
          local dinamica por lo que los generos de StarWars y Aventura no son
          modificables, así mismo es posible que por el uso de dos databases
          haya algunos problemas de compatibilidad.
          <span></span>
          El objetivo del proyecto es mostrar un poco del uso de AXIOS y del uso
          de componentes de React.
        </p>
        <Button onClick={setVisibility} description="Okay!"></Button>
      </div>
    );
  };

  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
    </>
  );
};

export default InfoModal;
