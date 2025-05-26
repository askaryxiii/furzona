import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ForgetPass from "./pages/login/ForgetPass";
import { useDispatch, useSelector } from "react-redux";
import MainForm from "./pages/form/MainForm";
import { NavigationListener } from "./components/services/NavigationListener";
import Loading from "./components/common/comonUse/Loading";
import { useEffect } from "react";
import {
  startLoading,
  stopLoading,
} from "./context/slices/loading/loadingSlice";

function App() {
  const userLogged = useSelector((state) => state.login.userLogged);
  const userRegistered = useSelector((state) => state.register.userRegistered);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    const timer = setTimeout(() => dispatch(stopLoading()), 800);

    return () => clearTimeout(timer);
  }, [location.pathname, dispatch]);

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
    <>
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={isLoading ? <Loading /> : <MainForm login={true} />}
          />
          <Route
            path="/register"
            element={isLoading ? <Loading /> : <MainForm login={false} />}
          />
          <Route
            path="/forgetPassword"
            element={isLoading ? <Loading /> : <ForgetPass />}
          />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={isLoading ? <Loading /> : <Home />} />
        </Route>

        {/* Error Route */}
        <Route path="/*" element={isLoading ? <Loading /> : <ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
