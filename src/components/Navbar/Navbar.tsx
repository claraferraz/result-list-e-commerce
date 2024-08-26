import Logo from "../../assets/logo.svg";
import NavbarCart from "../../assets/navbar-cart.svg";
import NavbarHeart from "../../assets/navbar-heart.svg";
import NavbarProfile from "../../assets/navbar-profile.svg";
import NavbarSearch from "../../assets/navbar-search.svg";
import { HamburguerMenu } from "../HamburguerMenu/HamburguerMenu";
import { useState } from "react";
import styles from "./styles.module.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.wrapper} ${open ? styles.open : ""}`}>
      <div className={styles.mobileHeader}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.burguer}>
          <HamburguerMenu open={open} setOpen={setOpen} />
        </div>
      </div>
      <div className={`${styles.navbar} ${open ? styles.open : ""}`}>
        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
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
            <a href="/login">
              <img src={NavbarProfile} alt="profile-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavbarSearch} alt="search icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavbarHeart} alt="heart icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavbarCart} alt="cart icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
