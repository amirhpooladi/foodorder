import React from "react";
import style from "../src/Input.module.css";

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
