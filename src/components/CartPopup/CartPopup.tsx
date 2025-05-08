import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import {
  removeProduct,
  selectCartProducts,
  selectCartSubtotal,
  setCartPopup,
  setOrderId,
} from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import closeCart from "../../assets/closeCart.svg";

export const CartPopup = () => {
  const api = import.meta.env.VITE_API_URL;
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCartProducts);
  const cartSubtotal = useAppSelector(selectCartSubtotal);

  const token = useAppSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${api}/checkout/registerCart?`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: products.map((p) => {
            return {
              productId: p.productId,
              detailsId: p.detailsId,
              amount: p.amount,
            };
          }),
        }),
      });
      const data = await response.json();
      if (data) {
        navigate("/checkout");
        dispatch(setOrderId(data.id));
      }
    } catch {
      throw new Error("deu ruim aqui");
    }
  };
  return (
    <div className={styles.background}>

    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button className={styles.closeBtn} onClick={() => dispatch(setCartPopup(false))}>
          <img src={closeCart} alt="close cart" />
        </button>
      </div>
      <div className={styles.body}>
        {products.map((p) => {
          return (
            <div className={styles.product}>
              <div className={styles.image}>
                <img src={p.image} alt="" />
              </div>

              <div className={styles.productInfo}>
                <p >{p.title}</p>
                
                <div className={styles.productPriceWrapper}>
                <p>
                  {p.amount}
                </p>
                <p>x</p>
                <p className={styles.price}>Rs.{p.price}</p>
                </div>
              </div>

              <div>
                <button className={styles.removeBtn} onClick={() => dispatch(removeProduct(p.detailsId))}>
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p>Subtotal</p>
        <p>Rs.{cartSubtotal}</p>
      </div>
      <div className={styles.footer}>
        <button onClick={() => navigate("/cart")}>Cart</button>
        <button onClick={handleCheckout}>Checkout</button>
        <button>Comparison</button>
      </div>
    </div>
        </div>
  );
};
