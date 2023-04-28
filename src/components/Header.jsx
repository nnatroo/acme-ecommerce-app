import classes from '../modules/Header.module.css'

const Header = () => {
  return (
    <>
        <nav className={classes['navbar']}>
            <div className={classes["left-nav"]}>
                <a href=""><img src="./src\assets\logoipsum-283.svg" width={"40px"} alt="nav-brand" /></a>
                <ul className={classes['nav-items']}>
                    <li>All</li>
                    <li>Shirts</li>
                    <li>Stickers</li>
                </ul>
            </div>

            <div className={classes["middle-nav"]}>
                <input type="text" placeholder="Search for products..."/>
                <img src="./src\assets\icons8-search.svg" alt="asd"/>
            </div>

            <div className={classes["right-nav"]}>
                <img src="./src\assets\shopping-bag-svgrepo-com.svg" width={"30px"} alt="shopping-cart" />
            </div>
        </nav>
    </>
  )
}

export default Header