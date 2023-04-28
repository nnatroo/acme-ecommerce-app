import classes from "../modules/Hero.module.css";
import Product from "../ui/Product";

const Hero = () => {
  return (
    <div className={classes["hero-grid"]}>

      <a href="" className={classes["left-col"]}>
        <div className={classes['price-tag']}>
            <h3>Acme T-shirt</h3>
            <p>$20.00 USD</p>
        </div>
        <img src="./src\assets\products\t-shirt-color-beige.avif" alt=""/>
      </a>

      <div className={classes["right-col"]}>
        <Product imgSrc='./src\assets\products\cup-black.avif' />
        <Product imgSrc='./src\assets\products\sticker-rainbow.avif'/>
      </div>
    </div>
  );
};

export default Hero;
