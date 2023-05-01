import React from "react";
import ProductsItem from "../ui/ProductsItem";
import classes from "../modules/Products.module.css";
import products from "../../products-listing.json";

const Products = (props) => {
  const filteredArray = products.filter(product => product.name.toLowerCase().includes(props.filter))

  return (
    <div className={classes["products"]}>
      {filteredArray.map((product, index) => (
        <ProductsItem name={product.name}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      key={index}
                      />
      ))}


    </div>
  );
};

export default Products;
