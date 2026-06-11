import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </main>
  );
}
