import React from "react";
import classes from '../modules/AboutContent.module.css'

const AboutContent = () => {
  return (
    <div className={classes['about-content-wrapper']}>
      <h1>About</h1>
      <p>
        This website is built with React.js Commerce, which is a ecommerce
        as Shopify storefront.
      </p>
      <p>Support for real-world commerce features including:</p>
      <ul>
        <li> Out of stocks</li>
        <li> Order history</li>
        <li> Order status</li>
        <li> Cross variant / option availability (aka. Amazon style)</li>
        <li> Hidden products</li>
        <li>
          Dynamically driven content and features via Shopify (ie. collections,
          menus, pages, etc.)
        </li>
        <li> Seamless and secure checkout via Shopify Checkout</li>
        <li> And more!</li>
      </ul>


    </div>
  );
};

export default AboutContent;
