import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  addAmountToCart,
  removeFromCart,
  removeProduct,
  selectCartProducts,
  selectCartSubtotal,
  setOrderId,
} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CartSection = () => {
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
    if (products.length <= 0) {
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

  //enviar o pedido pro checkout e verificar se ta logado, se não estiver, redirecionar pra a tela de login
  return (
    <section className={styles.section}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              return (
                <tr className={styles.row}>
                  <td>
                    <img className={styles.image} src={p.image} alt="" />
                  </td>
                  <td>{p.title}</td>
                  <td>{p.price}</td>
                  <td className={styles.counter}>
                    <button
                      onClick={() => dispatch(removeFromCart(p.detailsId))}
                    >
                      -
                    </button>
                    <p>{p.amount}</p>
                    <button
                      onClick={() => dispatch(addAmountToCart(p.detailsId))}
                    >
                      +
                    </button>
                  </td>
                  <td>{p.productSubtotal}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(removeProduct(p.detailsId));
                        toast.info("product removed");
                      }}
                    >
                      lixo
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Cart Totals</h1>
        <p>
          Subtotal <span>{cartSubtotal}</span>
        </p>
        <p>
          Total <span>{cartSubtotal}</span>
        </p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </section>
  );
};
