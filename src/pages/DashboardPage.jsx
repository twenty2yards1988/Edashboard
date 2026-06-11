import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main aria-labelledby="dashboard-title">
      <h1 id="dashboard-title">Dashboard</h1>

      <p>Welcome, {user?.name}</p>
      <p>Your role: {user?.role}</p>

      <button aria-label="Go to admin page" onClick={() => navigate("/admin")}>
        Go to Admin Page
      </button>

      <button aria-label="Logout current user" onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
}