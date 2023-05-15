import { createContext, useState } from "react";

export interface User {
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface IAuthContext {
  signin: (authData: AuthResponse) => void;
  signout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("authToken");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const signin = (authData: AuthResponse) => {
    localStorage.setItem("authToken", authData.token);
    localStorage.setItem("user", JSON.stringify(authData.user));
    setIsAuthenticated(true);
  };

  const signout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  // useEffect(() => {
  //   const isAuth = !!localStorage.getItem("authToken");
  //   setIsAuthenticated(isAuth);
  // }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ signin, signout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
