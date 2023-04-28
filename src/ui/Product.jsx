import classes from "../modules/Product.module.css";

const Product = (props) => {
  return (
    <a>
      <div className={classes["product"]}>
        <div className={classes["price-tag"]}>
          <h3>Acme T-shirt</h3>
          <p>$20.00 USD</p>
        </div>
        <img src={props.imgSrc} alt="" />
      </div>
    </a>
  );
};

export default Product;
