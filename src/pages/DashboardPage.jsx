import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const completedTasks = tasks.filter((task) => task.status === "Completed").length;
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress").length;

  return (
    <main aria-labelledby="dashboard-title">
      <div className="dashboard-header">
        <div>
          <h1 id="dashboard-title">Task Dashboard</h1>
          <p>Welcome back, {user?.name}</p>
          <span className="role-badge">{user?.role}</span>
        </div>

        <div>
          <button onClick={() => navigate("/admin")}>Admin Page</button>
          <button className="danger-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{inProgressTasks}</p>
        </div>
      </section>

      <section aria-label="Task list">
        <h2>Recent Tasks</h2>

        <div className="task-grid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
}