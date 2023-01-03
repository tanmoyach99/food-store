import React from "react";
import styles from "./Modals.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};
const Overlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalEl = document.getElementById("overlays");
const Modals = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, portalEl)}
    </React.Fragment>
  );
};

export default Modals;
