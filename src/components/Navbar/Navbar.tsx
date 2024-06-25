import Logo from "../../assets/logo.svg";
import NavbarCart from "../../assets/navbar-cart.svg";
import NavbarHeart from "../../assets/navbar-heart.svg";
import NavbarProfile from "../../assets/navbar-profile.svg";
import NavbarSearch from "../../assets/navbar-search.svg";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <MenuMobile />
      <ul className={styles.links}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul className={styles.icons}>
        <li>
          <a href="#">
            <img src={NavbarProfile} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={NavbarSearch} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={NavbarHeart} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={NavbarCart} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
