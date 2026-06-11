import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROLES } from "../utils/constants";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(role) {
    login(role);
    navigate("/dashboard");
  }

  return (
    <main aria-labelledby="login-title">
      <h1 id="login-title">Login Page</h1>

      <button aria-label="Login as admin" onClick={() => handleLogin(ROLES.ADMIN)}>
        Login as Admin
      </button>

      <button aria-label="Login as manager" onClick={() => handleLogin(ROLES.MANAGER)}>
        Login as Manager
      </button>

      <button aria-label="Login as employee" onClick={() => handleLogin(ROLES.EMPLOYEE)}>
        Login as Employee
      </button>
    </main>
  );
}
