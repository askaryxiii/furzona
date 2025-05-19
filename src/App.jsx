import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginReg from "./pages/login/LoginForm";
import ErrorPage from "./pages/ErrorPage";
import ForgetPass from "./pages/login/ForgetPass";
import { useSelector } from "react-redux";
import RegisterSection from "./components/features/RegisterSection";
import RegisterForm from "./pages/register/RegisterForm";

function App() {
  const userLogged = useSelector((state) => state.login.userLogged);
  return (
    <Routes>
      {userLogged ? (
        <Route index element={<Home />} />
      ) : (
        <Route index element={<LoginReg />} />
      )}

      <Route path="/*" element={<ErrorPage />} />
      {!userLogged && <Route path="/register" element={<RegisterForm />} />}
      <Route path="/forgetPassword" element={<ForgetPass />} />
    </Routes>
  );
}

export default App;
