import React from "react";
import Modals from "../UI/Modals";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const CartItems = [
    {
      id: "c1",
      name: "kacchi biriyani",
      amount: 3,
      price: 10.2,
    },
  ].map((cart) => {
    return <li>{cart.name}}</li>;
  });
  return (
    <Modals onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{CartItems}</ul>

      <div className={styles.total}>
        <span>Total AMount</span>
        <span>100</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modals>
  );
};

export default Cart;
