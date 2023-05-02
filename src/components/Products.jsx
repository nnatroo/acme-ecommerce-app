import React from "react";
import ProductsItem from "../ui/ProductsItem";
import classes from "../modules/Products.module.css";
import products from "../../products-listing.json";
import { Link } from "react-router-dom"

const Products = (props) => {
  return (
      <div className={classes["products"]}>
        {props.filteredArray.length != 0 ? (
          props.filteredArray.map((product, index) => (
              <ProductsItem
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                id={product._id}
                key={index}
              />
          ))
        ) : (
          <p>There are no products that match "{props.search}"</p>
        )}
      </div>
   
  );
};

export default Products;
