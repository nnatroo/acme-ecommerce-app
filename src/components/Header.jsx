import { useState } from "react";
import classes from "../modules/Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const changeHandler = (e) => {
    navigate("/search");
    props.onChange(e.target.value);
  };

  return (
    <>
      <nav className={classes["navbar"]}>
        <div className={classes["left-nav"]}>
          <Link to="/">
            <img
              src="../../src\assets\logoipsum-283.svg"
              width={"40px"}
              alt="nav-brand"
            />
          </Link>
          <ul className={classes["nav-items"]}>
            <li>
              <Link to="/search">All</Link>
            </li>
            {/* <li>Shirts</li>
            <li>Stickers</li> */}
          </ul>
        </div>

        <div className={classes["middle-nav"]}>
          <input
            type="text"
            placeholder="Search for products..."
            value={props.search}
            onChange={changeHandler}
          />
          <img src="../../src\assets\icons8-search.svg" alt="asd" />
        </div>

        <div className={classes["right-nav"]}>
          <img
            src="../../src\assets\shopping-bag-svgrepo-com.svg"
            width={"30px"}
            alt="shopping-cart"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
