import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  console.log(props);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;
