import React, { useContext, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = useMemo(() => pathname + search, [pathname, search]);
  useEffect(() => {
    // const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);
  }, [pathname, search]);
  // const lastPath = pathname + search;
  // localStorage.setItem("lastPath", lastPath);
  // console.log("render", { pathname, search });

  return logged ? children : <Navigate to="/login" />;
};
