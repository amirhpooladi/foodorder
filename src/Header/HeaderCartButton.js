import React, { useEffect, useState } from "react";
import styles from "../Header/HeaderCartButton.module.css";
import CartIcon from "../Header/CartIcon";
import { useContext } from "react";
import CartContext from "../cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlited, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlited ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    clearTimeout(timer);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
