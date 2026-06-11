import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";
import { ROLES } from "../utils/constants";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const role = user?.role;

  const visibleTasks =
    role === ROLES.ADMIN
      ? tasks
      : role === ROLES.MANAGER
      ? tasks.filter((task) => task.priority !== "Low")
      : tasks.filter((task) => task.assignedTo === "Employee User");

  const completedTasks = visibleTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressTasks = visibleTasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pendingTasks = visibleTasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const pieData = [
    { name: "Completed", value: completedTasks },
    { name: "In Progress", value: inProgressTasks },
    { name: "Pending", value: pendingTasks },
  ];

  const barData = visibleTasks.map((task) => ({
    name: task.title,
    priority:
      task.priority === "High" ? 3 : task.priority === "Medium" ? 2 : 1,
  }));

  return (
    <main aria-labelledby="dashboard-title">
      <div className="dashboard-header">
        <div>
          <h1 id="dashboard-title">
            {role === ROLES.ADMIN && "Admin Dashboard"}
            {role === ROLES.MANAGER && "Manager Dashboard"}
            {role === ROLES.EMPLOYEE && "Employee Dashboard"}
          </h1>

          <p>
            Welcome back, {user?.name}. You are viewing your role-based
            workspace.
          </p>

          <span className="role-badge">{role}</span>
        </div>

        <div>
          {role === ROLES.ADMIN && (
            <button onClick={() => navigate("/admin")}>Admin Page</button>
          )}

          <button className="danger-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>{role === ROLES.ADMIN ? "All Tasks" : "Visible Tasks"}</h3>
          <p>{visibleTasks.length}</p>
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

      <section className="chart-grid">
        <div className="chart-card">
          <h2>Task Status Pie Chart</h2>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                <Cell fill="#22c55e" />
                <Cell fill="#f97316" />
                <Cell fill="#6366f1" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Task Priority Graph</h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey="priority" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section aria-label="Task list">
        <h2>
          {role === ROLES.ADMIN && "All Company Tasks"}
          {role === ROLES.MANAGER && "Team Priority Tasks"}
          {role === ROLES.EMPLOYEE && "My Tasks"}
        </h2>

        <div className="task-grid">
          {visibleTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </main>
  );
}