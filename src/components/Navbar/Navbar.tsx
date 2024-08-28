import Logo from "../../assets/logo.svg";
import NavbarCart from "../../assets/navbar-cart.svg";
import NavbarLogout from "../../assets/navbarLogout.png";
import NavbarProfile from "../../assets/navbar-profile.svg";
import { HamburguerMenu } from "../HamburguerMenu/HamburguerMenu";
import { useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setCartPopup } from "../../features/cart/cartSlice";
import { CartPopup } from "../CartPopup/CartPopup";
import { logout } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const cartPopup = useAppSelector((state) => state.cart.popupOpen);

  return (
    <>
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
              <a
                href="#"
                onClick={() => {
                  dispatch(logout());
                  toast.info("User logged out");
                }}
              >
                <img src={NavbarLogout} alt="search icon" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => dispatch(setCartPopup(true))}>
                <img src={NavbarCart} alt="cart icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {cartPopup && <CartPopup />}
    </>
  );
};
