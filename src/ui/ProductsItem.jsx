import React from "react";
import classes from "../modules/ProductsItem.module.css";
import { Link } from "react-router-dom"

const ProductsItem = (props) => {
  return (
    <>
      <Link to={`/${props.name}`}>
        <div className={classes["product"]}>
          <div className={classes["price-tag"]}>
            <h3>{props.name}</h3>
            <p>${props.price}.00 USD</p>
          </div>
          <img
            src={props.imageUrl}
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default ProductsItem;
