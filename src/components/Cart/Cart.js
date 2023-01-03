import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modals from "../UI/Modals";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItems = cartCtx.items.map((cart) => {
    return (
      <CartItem
        key={cart.id}
        name={cart.name}
        amount={cart.amount}
        price={cart.price}
        onAdd={cartItemAddHandler.bind(null, cart)}
        onRemove={cartItemRemoveHandler.bind(null, cart.id)}
      />
    );
  });
  return (
    <Modals onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{CartItems}</ul>

      <div className={styles.total}>
        <span>Total AMount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modals>
  );
};

export default Cart;
