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
    <main>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}</p>
      <p>Your role: {user?.role}</p>

      <button onClick={() => navigate("/admin")}>Go to Admin Page</button>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}