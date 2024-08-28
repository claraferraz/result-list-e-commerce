import MainRoutes from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div>
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}
