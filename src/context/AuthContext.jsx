import { createContext, useState } from "react";
import { ROLES, STORAGE_KEYS } from "../utils/constants";
import { storage } from "../utils/storage";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.get(STORAGE_KEYS.USER));
  const [token, setToken] = useState(storage.get(STORAGE_KEYS.TOKEN));

  function login(role = ROLES.EMPLOYEE) {
    const demoUser = {
      id: 1,
      name: "Demo User",
      email: "demo@example.com",
      role,
    };

    const demoToken = "demo-token-123";

    setUser(demoUser);
    setToken(demoToken);

    storage.set(STORAGE_KEYS.USER, demoUser);
    storage.set(STORAGE_KEYS.TOKEN, demoToken);
  }

  function logout() {
    setUser(null);
    setToken(null);

    storage.remove(STORAGE_KEYS.USER);
    storage.remove(STORAGE_KEYS.TOKEN);
  }

  const isAuthenticated = Boolean(user && token);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}