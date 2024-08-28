import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import {
  removeProduct,
  selectCartProducts,
  selectCartSubtotal,
  setCartPopup,
} from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

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
      }
    } catch {
      throw new Error("deu ruim aqui");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button onClick={() => dispatch(setCartPopup(false))}>X</button>
      </div>
      <div>
        {products.map((p) => {
          return (
            <div className={styles.product}>
              <div className={styles.image}>
                <img src={p.image} alt="" />
              </div>
              <div>
                <p>{p.title}</p>
                <p>
                  {p.amount} x Rs.{p.price}
                </p>
              </div>
              <div>
                <button onClick={() => dispatch(removeProduct(p.detailsId))}>
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
      <div>
        <button onClick={() => navigate("/cart")}>Cart</button>
        <button onClick={handleCheckout}>Checkout</button>
        <button>Comparison</button>
      </div>
    </div>
  );
};
