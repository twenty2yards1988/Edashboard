import { useMemo } from "react";

export function useTasks() {
  const tasks = useMemo(
    () => [
      {
        id: 1,
        title: "Setup Environment Variables",
        status: "Completed",
        priority: "High",
        assignedTo: "Admin User",
      },
      {
        id: 2,
        title: "Implement Role Based Authorization",
        status: "Completed",
        priority: "High",
        assignedTo: "Manager User",
      },
      {
        id: 3,
        title: "Optimize Application Performance",
        status: "In Progress",
        priority: "Medium",
        assignedTo: "Employee User",
      },
      {
        id: 4,
        title: "Fix Mobile Responsiveness",
        status: "Pending",
        priority: "Low",
        assignedTo: "Employee User",
      },
    ],
    []
  );

  return { tasks };
}
