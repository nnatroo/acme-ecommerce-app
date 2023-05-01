import classes from "../modules/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-section"]}>
      <div className={classes["footer"]}>
        <a className={classes["col-1"]}>
          <img src="../src\assets\logoipsum-283.svg" alt="" />
          <h3>Acme Store</h3>
        </a>
        <div className={classes["col-2"]}>
          <a>Home</a>
          <a>About</a>
          <a>Terms & Conditions</a>
          <a>Shipping & Return Policy</a>
        </div>
        <div className={classes["col-3"]}>
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </div>
        <div className={classes["col-4"]}>
          <a href="">
            <img
              src="../src\assets\github-142-svgrepo-com.svg"
              width={"30px"}
              alt=""
            />
          </a>
        </div>
      </div>
      <hr />
      <div className={classes['underfooter-section']}>
        <span>© 2023 Natroshvili Store. All rights reserved.</span>
      </div>
      
    </div>
  );
};

export default Footer;
