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
import trashCan from '../../assets/trash-can.svg'

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
          <p className={styles.tableHead}></p>
          <p className={styles.tableHead}>Product</p>
          <p className={styles.tableHead}>Price</p>
          <p className={styles.tableHead}>Quantity</p>
          <p className={styles.tableHead}>Subtotal</p>
          <p className={styles.tableHead}></p>
 
          {products.map((p) => {
            return(
              <>
               <img className={styles.image} src={p.image} alt="" />
               <p className={styles.gray}>{p.title}</p>
               <p className={styles.gray}>R${p.price.toFixed(2)}</p>
               <div className={styles.counter}>
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
               </div>
               <p>
               R${p.productSubtotal.toFixed(2)}
               </p>
               <button className={styles.trash}
                      onClick={() => {
                        dispatch(removeProduct(p.detailsId));
                        toast.info("product removed");
                      }}
                    >
                      <img src={trashCan} alt="trash can" />
                    </button>
              </>
            )
          })}
      </div>
      <div className={styles.totalWrapper}>
        <h1>Cart Totals</h1>
        <div className={styles.totalText}>
          <div>
        <p>
          Subtotal 
        </p>
          <p className={styles.subtotal}>R${cartSubtotal.toFixed(2)}</p>
          </div>
          <div>

        <p>
          Total
        </p>
          <p  className={styles.total}>R${cartSubtotal.toFixed(2)}</p>
          </ div>
        </div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </section>
  );
};
