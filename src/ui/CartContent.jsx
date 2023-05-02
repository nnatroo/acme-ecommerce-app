import React from "react";
import classes from "../../src/modules/CartContent.module.css";
import 'animate.css';

const CartContent = () => {
  return (
    <>
      <div className={classes["backdrop"]}></div>
      <div className={`${classes["cart-content-wrapper"]} animate__animated animate__slideInRight animate__faster`}>
        <div className={classes['cart-header']}>
            <h3>My Cart</h3>
            <img src="../../src\assets\x-symbol-svgrepo-com.svg" alt="" srcset="" />
        </div>
        <div className={classes["cart-content"]}>
            <img src="../../src\assets\shopping-bag-svgrepo-com.svg" alt="" />
            <h3>Your Cart is empty.</h3>
        </div>
      </div>

    </>
  );
};

export default CartContent;
