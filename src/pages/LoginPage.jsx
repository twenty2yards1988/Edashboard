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
    <main>
      <h1>Login Page</h1>

      <button onClick={() => handleLogin(ROLES.ADMIN)}>
        Login as Admin
      </button>

      <button onClick={() => handleLogin(ROLES.MANAGER)}>
        Login as Manager
      </button>

      <button onClick={() => handleLogin(ROLES.EMPLOYEE)}>
        Login as Employee
      </button>
    </main>
  );
}
