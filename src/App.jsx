import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Loading from "./components/common/comonUse/Loading";
import { lazy, Suspense } from "react";
import NavBarComponent from "./components/common/Navbar/NavBarComponent";
import Footer from "./components/common/Footer/Footer";

function App() {
  const userLogged = useSelector((state) => state.login.userLogged);
  const userRegistered = useSelector((state) => state.register.userRegistered);
  const MainForm = lazy(() => import("./pages/form/MainForm"));
  const Home = lazy(() => import("./pages/Home"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));
  const ForgetPass = lazy(() => import("./pages/login/ForgetPass"));
  const About = lazy(() => import("./pages/about/About"));
  const Pets = lazy(() => import("./pages/pets/Pets"));
  const MePage = lazy(() => import("./pages/mePage/MePage"));

  const PrivateRoute = () => {
    const isAuthenticated = userLogged || userRegistered;

    return isAuthenticated ? (
      <>
        <NavBarComponent /> <Outlet /> <Footer />
      </>
    ) : (
      <Navigate to="/login" replace />
    );
  };

  const PublicRoute = () => {
    const isAuthenticated = userLogged || userRegistered;

    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
  };

  return (
    <>
      <NavBarComponent />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* <Route element={<PublicRoute />}>
            <Route path="/login" element={<MainForm login={true} />} />
            <Route path="/register" element={<MainForm login={false} />} />
            <Route path="/forgetPassword" element={<ForgetPass />} />
          </Route> */}

          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/pets" element={<Pets />} />
          {/* </Route> */}

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
