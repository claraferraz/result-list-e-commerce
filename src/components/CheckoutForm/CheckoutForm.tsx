import { useNavigate } from "react-router-dom";
import {
  selectCartOrderId,
  selectCartProducts,
  selectCartSubtotal,
} from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from "./styles.module.css";

export const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = useAppSelector(selectCartProducts);
  const orderId = useAppSelector(selectCartOrderId);
  const cartSubtotal = useAppSelector(selectCartSubtotal);
  const token = useAppSelector((state) => state.auth.token);

  if (!orderId) {
    navigate("/cart");
    return;
  }
  if (!token) {
    navigate("/login");
  }

  //enviar os dados de billing e atualizar o pedido com o billing id
  return (
    <section>
      <form action="" className={styles.form}>
        <div className={styles.inputsWrapper}>
          <h1>Billing details</h1>
          <div className={styles.namesInputs}>
            <label htmlFor="">
              First Name
              <input type="text" name="firstName" />
            </label>
            <label htmlFor="">
              Last Name
              <input type="text" name="lastName" />
            </label>
          </div>
          <label htmlFor="">
            Company Name (optional)
            <input type="text" name="companyName" />
          </label>
          <label htmlFor="">
            ZIP code
            <input type="text" name="zipCode" />
          </label>
          <label htmlFor="">
            Country / Region
            <input type="text" name="region" />
          </label>
          <label htmlFor="">
            Street address
            <input type="text" name="address" />
          </label>
          <label htmlFor="">
            Town / City
            <input type="text" name="city" />
          </label>
          <label htmlFor="">
            Province
            <input type="text" name="province" />
          </label>
          <label htmlFor="">
            Add-on address
            <input type="text" name="addOnAddress" />
          </label>
          <label htmlFor="">
            Email address
            <input type="text" name="email" />
          </label>
          <label htmlFor="">
            <input
              type="text"
              name="information"
              placeholder="Adicional Information"
            />
          </label>
        </div>
        <div>
          <div className={styles.order}>
            <h3>Product</h3>
            <h3>Subtotal</h3>
            {products.map((p) => {
              return (
                <>
                  <p>
                    {p.title} x <span>{p.amount}</span>
                  </p>
                  <p>Rs.{p.productSubtotal}</p>
                </>
              );
            })}
            <p>Subtotal</p>
            <p>Rs.{cartSubtotal}</p>
            <p>Total</p>
            <p>Rs.{cartSubtotal}</p>
          </div>
          <div>
            <label htmlFor="">
              <input type="checkbox" checked />
              Direct Bank Transfer
            </label>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label htmlFor="">
              <input type="checkbox" disabled />
              Direct Bank Transfer
            </label>
            <label htmlFor="">
              <input type="checkbox" disabled />
              Cash On Delivery
            </label>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <button type="submit" className={styles.checkoutBtn}>
            Place order
          </button>
        </div>
      </form>
    </section>
  );
};
