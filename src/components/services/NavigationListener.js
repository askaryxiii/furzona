import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  startLoading,
  stopLoading,
} from "../../context/slices/loading/loadingSlice";

export const NavigationListener = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    // Only show loading if pathname changes
    if (location.pathname !== previousLocation.pathname) {
      dispatch(startLoading());
      // Simulate loading completion (replace with real async logic if needed)
      const timer = setTimeout(() => dispatch(stopLoading()), 500);
      return () => clearTimeout(timer);
    }
    setPreviousLocation(location);
  }, [location, previousLocation, dispatch]);

  return null;
};
