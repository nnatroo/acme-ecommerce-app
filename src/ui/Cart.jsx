import React, { useEffect, useState } from "react";
import classes from "../modules/Cart.module.css";
import CartContent from "./CartContent";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const clickHandler = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (showCart == false) { 
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';

    }
  }, [showCart]);

  return (
    <div onClick={clickHandler} className={classes["cart-wrapper"]}>
        <img
            src="../../src\assets\shopping-bag-svgrepo-com.svg"
            width={"30px"}
            alt="shopping-cart"
          />
      {showCart && <CartContent />}
    </div>
  );
};

export default Cart;
