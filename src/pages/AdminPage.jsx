import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Admin Page</h1>
      <p>Only admin users can see this page.</p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}