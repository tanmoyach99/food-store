import React from "react";
import styles from "./Header.module.css";
import meals from "../../images/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="a table of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
