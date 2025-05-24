import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ForgetPass from "./pages/login/ForgetPass";
import { useSelector } from "react-redux";
import RegisterForm from "./pages/register/RegisterForm";
import LoginForm from "./pages/login/LoginForm";

function App() {
  const userLogged = useSelector((state) => state.login.userLogged);
  const userRegistered = useSelector((state) => state.register.userRegistered);

  const PrivateRoute = () => {
    // Replace with your actual auth check
    const isAuthenticated = userLogged || userRegistered;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };

  const PublicRoute = () => {
    // Replace with your actual auth check
    const isAuthenticated = userLogged || userRegistered;

    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgetPassword" element={<ForgetPass />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Error Route */}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
