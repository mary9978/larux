import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
import toast from "react-hot-toast";
const DEFAULT_USER_CONTEXT = {
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  login: (data: any) => {},
  logout: () => {},
};
const AuthContext = createContext(DEFAULT_USER_CONTEXT);
export default function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const isLoggedIn = user !== null;
  const validateUser = (token: string) => {
    const headers = {'Authorization':`Bearer ${token}`}
    axios
      .get("https://blog-02.liara.run/api/v1/auth/profile", {headers})
      .then(({ data }) => {
        setUser(data.data);
        toast.success("با موفقیت وارد شدید");
        navigate("/");
      });
  };
  const login = async (data: any) => {
    localStorage.setItem("bearer token", data.token);
    validateUser(data.token);
  };
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };
  const value = useMemo<any>(
    () => ({
      user,
      setUser,
      login,
      logout,
      isLoggedIn,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
  return useContext(AuthContext);
};
