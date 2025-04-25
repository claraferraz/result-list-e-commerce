import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { setToken, setUserData } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string;
  email: string;
  password: string;
  terms: boolean;
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const api = import.meta.env.VITE_API_URL;
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (formData.terms) {
      const response = await fetch(`${api}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: "USER",
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 500) {
          setErrorMessage("User not found");
          return;
        }
        setErrorMessage(data.error);
        throw new Error(`Response status: ${response.status}`);
      } else {
        const token = data.token;
        dispatch(setToken(token));
        setUser(token);
        toast.success("User registered successfully!");
        navigate("/");
      }
    }
  };

  const setUser = async (token: string) => {
    const response = await fetch(`${api}/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!data) {
      throw new Error("error getting user from server");
    }
    dispatch(
      setUserData({
        user: {
          username: data.username,
          email: data.email,
        },
      })
    );
  };

  return (
    <>
      <h1>Get Started Now</h1>
      <p>Enter your Credentials to access your account</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <label className={styles.label}>
          Name
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.input}
            {...register("username", {
              required: true,
            })}
          />
          {errors.username && <p className={styles.error}>Required field</p>}
        </label>
        <label className={styles.label}>
          Email address
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.input}
            {...register("email", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email && (
            <p className={styles.error}>Please enter a valid email</p>
          )}
        </label>
        <label className={styles.label}>
          <span className={styles.forgotPassword}>
            Password
            <a href="#">forgot password</a>
          </span>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password", { required: true })}
          />
          {errors.password && <p className={styles.error}>Required field</p>}
        </label>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" {...register("terms", { required: true })} />I
          agree to <a href="#">terms and policies</a>
          {errors.terms && <p className={styles.error}>Required field</p>}
        </label>

        <button type="submit" className={styles.btn}>
          Signup
        </button>
      </form>

      <div className={styles.division}>
        <p>Or</p>
        <div></div>
      </div>

      <div className={styles.socialWrapper}>

<button className={styles.socialBtn}>
  <img src="src\assets\google.svg" alt="" />
  Sign in with Google</button>
<button className={styles.socialBtn}>
<img src="src\assets\apple.svg" alt="" />
Sign in with Apple</button>
</div>

      <p className={styles.registerLink}>
        Have an account?
        <span>
          <a href="/login">Sign In</a>
        </span>
      </p>
    </>
  );
};
