import { createContext, useState } from "react";
import { STORAGE_KEYS } from "../utils/constants";
import { storage } from "../utils/storage";

export const AuthContext = createContext(null);

const demoUsers = [
  {
    id: 1,
    name: "Admin User",
    username: "admin",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Manager User",
    username: "manager",
    password: "manager123",
    role: "manager",
  },
  {
    id: 3,
    name: "Employee User",
    username: "employee",
    password: "employee123",
    role: "employee",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.get(STORAGE_KEYS.USER));
  const [token, setToken] = useState(storage.get(STORAGE_KEYS.TOKEN));

  function login(username, password) {
    const foundUser = demoUsers.find(
      (item) => item.username === username && item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }

    const loggedInUser = {
      id: foundUser.id,
      name: foundUser.name,
      username: foundUser.username,
      role: foundUser.role,
    };

    const demoToken = "demo-token-123";

    setUser(loggedInUser);
    setToken(demoToken);

    storage.set(STORAGE_KEYS.USER, loggedInUser);
    storage.set(STORAGE_KEYS.TOKEN, demoToken);

    return {
      success: true,
      message: "Login successful",
    };
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