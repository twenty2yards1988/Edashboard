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
      <h1>Task Management Dashboard</h1>

      <p>
        Secure role-based access system with Admin, Manager and Employee roles.
      </p>

      <div className="button-group">
        <button onClick={() => handleLogin(ROLES.ADMIN)}>
          Login as Admin
        </button>

        <button onClick={() => handleLogin(ROLES.MANAGER)}>
          Login as Manager
        </button>

        <button onClick={() => handleLogin(ROLES.EMPLOYEE)}>
          Login as Employee
        </button>
      </div>
    </main>
  );
}
