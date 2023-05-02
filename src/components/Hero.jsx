import { Link } from "react-router-dom";
import classes from "../modules/Hero.module.css";
import Product from "../ui/Product";

const Hero = () => {
  return (
    <div className={classes["hero-grid"]}>
      <Link
        to={`/product/6451232ec32ab964f14fef1a`}
        className={classes["left-col"]}
      >
        <div className={classes["price-tag"]}>
          <h3>Acme T-shirt</h3>
          <p>$20.00 USD</p>
        </div>
        <img src="./src\assets\products\t-shirt-color-beige.avif" alt="" />
      </Link>

      <div className={classes["right-col"]}>
        <Link to={`/product/6451232ec32ab964f14fef1a`}>
          <Product imgSrc="./src\assets\products\cup-black.avif" />
        </Link>
        <Link to={`/product/6451232ec32ab964f14fef1a`}>
          <Product imgSrc="./src\assets\products\sticker-rainbow.avif" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
