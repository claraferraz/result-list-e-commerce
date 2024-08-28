import { useNavigate } from "react-router-dom";
import {
  clearCart,
  selectCartOrderId,
  selectCartProducts,
  selectCartSubtotal,
} from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  selectCurrentToken,
  seleCurrentUser,
} from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { clear } from "console";

type Inputs = {
  companyName: string;
  zipCode: string;
  region: string;
  address: string;
  city: string;
  province: string;
  addOnAddress: string;
  information: string;
};

export const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;
  const products = useAppSelector(selectCartProducts);
  const orderId = useAppSelector(selectCartOrderId);
  const cartSubtotal = useAppSelector(selectCartSubtotal);
  const token = useAppSelector(selectCurrentToken);
  const user = useAppSelector(seleCurrentUser);
  const [firstName, ...lastName] = user.username.split(" ");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  if (!orderId) {
    navigate("/cart");
    return;
  }
  if (!token) {
    navigate("/login");
    return;
  }

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await fetch(`${api}/checkout/${orderId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        companyName: formData.companyName,
        zipCode: formData.zipCode,
        region: formData.region,
        address: formData.address,
        city: formData.city,
        province: formData.province,
        addOnAddress: formData.addOnAddress,
        information: formData.information,
      }),
    });

    const data = await response.json();
    if (data) {
      toast.success("Order placed successfully");
      dispatch(clearCart());
      navigate("/");
    }
    if (!response.ok) {
      toast.error(response.status);
    }
  };

  return (
    <section>
      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputsWrapper}>
          <h1>Billing details</h1>
          <div className={styles.namesInputs}>
            <label>
              First Name
              <input type="text" value={firstName} disabled />
            </label>
            <label>
              Last Name
              <input type="text" value={lastName.join(" ")} disabled />
            </label>
          </div>
          <label>
            Company Name (optional)
            <input type="text" {...register("companyName")} />
          </label>
          <label>
            ZIP code
            <input type="text" {...register("zipCode", { required: true })} />
          </label>
          <label>
            Country / Region
            <input type="text" {...register("region", { required: true })} />
          </label>
          <label>
            Street address
            <input type="text" {...register("address", { required: true })} />
          </label>
          <label>
            Town / City
            <input type="text" {...register("city", { required: true })} />
          </label>
          <label>
            Province
            <input type="text" {...register("province", { required: true })} />
          </label>
          <label>
            Add-on address
            <input type="text" {...register("addOnAddress")} />
          </label>
          <label>
            Email address
            <input type="text" value={user.email} disabled />
          </label>
          <label>
            <input
              type="text"
              {...register("information")}
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
            <label>
              <input type="checkbox" checked />
              Direct Bank Transfer
            </label>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label>
              <input type="checkbox" disabled />
              Direct Bank Transfer
            </label>
            <label>
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
