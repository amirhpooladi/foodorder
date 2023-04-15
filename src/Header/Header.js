import React, { Fragment } from "react";
import styles from "../Header/Header.module.css";
import HeaderCartButton from "../Header/HeaderCartButton";
import meals from "../../src/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="food table" />
      </div>
    </Fragment>
  );
};
export default Header;
