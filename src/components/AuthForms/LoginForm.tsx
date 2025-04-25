import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./styles.module.css";
import { useState } from "react";
import { setToken, setUserData } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
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
    const response = await fetch(`${api}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 500) {
        setErrorMessage("User not found");
        return;
      }
      setErrorMessage(data.error);
    } else {
      const token = data.token as string;
      dispatch(setToken(token));
      setUser(token);
      toast.success("Login successful");
      navigate("/");
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
      <h1>Welcome Back!</h1>
      <p>Enter your Credentials to access your account</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
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
          <input type="checkbox" />
          Remember for 30 days
        </label>

        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>

      <div className={styles.division}>
        <p>Or</p>
        <div></div>
      </div>

      <button className={styles.socialBtn}>
        <img src="src\assets\google.svg" alt="" />
        Sign in with Google</button>
      <button className={styles.socialBtn}>
      <img src="src\assets\apple.svg" alt="" />
      Sign in with Apple</button>

      <p className={styles.registerLink}>
        Don't have an account?
        <span>
          <a href="/register">Sign Up</a>
        </span>
      </p>
    </>
  );
};
