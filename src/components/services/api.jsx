import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const loginUser = async (username, password, navigate) => {
  try {
    const res = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: username,
      password: password,
    });
    console.log(res.data);
    navigate("/home", { replace: true });
  } catch (error) {
    toast.error("Login failed. Please check your credentials");
    throw error;
  }
};
