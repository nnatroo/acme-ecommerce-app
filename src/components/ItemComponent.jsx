import React, { useState } from "react";
import classes from "../../src/modules/Item.module.css";
import { useParams } from "react-router-dom";


const ItemComponent = () => {
  const [selectedImage, setSelecterImage] = useState(
    "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Fproducts%2Ft-shirt-spiral-1.png%3Fv%3D1682089838&w=640&q=75"
  );
  const { id } = useParams();

  const clickHandler = (e) => {
    setSelecterImage(e.target.src);
  };

  return (
    <div className={classes["item-component-wrapper"]}>
      <div className={classes["item-image-container"]}>
        <div className={classes["item-main-image"]}>
          <div className={classes["item-main-image-headers"]}>
            <h1>Acme Rainbow Prism T-Shirt</h1>
            <p>$25.00 USD</p>
          </div>
          <img src={selectedImage} />
        </div>
        <div className={classes["item-other-images"]}>
          <img
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Fproducts%2Ft-shirt-spiral-1.png%3Fv%3D1682089838&w=640&q=75"
            alt=""
            onClick={clickHandler}
          />
          <img
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Fproducts%2Ft-shirt-spiral-2.png%3Fv%3D1682089838&w=640&q=75"
            alt=""
            onClick={clickHandler}
          />
          <img
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Fproducts%2Ft-shirt-spiral-3.png%3Fv%3D1682089838&w=640&q=75"
            alt=""
            onClick={clickHandler}
          />
          <img
            src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Fproducts%2Ft-shirt-spiral-4.png%3Fv%3D1682089839&w=640&q=75"
            alt=""
            onClick={clickHandler}
          />
        </div>
      </div>

        <div className={classes['item-content-container']}>
            <span>60% combed ringspun cotton/40% polyester jersey tee.</span>
            <span>Product ID | {id}</span>
            <button>ADD TO CART</button>
        </div>

    </div>
  );
};

export default ItemComponent;
