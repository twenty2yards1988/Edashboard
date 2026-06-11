import { useMemo } from "react";

export function useTasks() {
  const tasks = useMemo(
    () => [
      {
        id: 1,
        title: "Setup Environment Variables",
        status: "Completed",
        priority: "High",
      },
      {
        id: 2,
        title: "Implement Role Based Authorization",
        status: "Completed",
        priority: "High",
      },
      {
        id: 3,
        title: "Optimize Application Performance",
        status: "In Progress",
        priority: "Medium",
      },
    ],
    []
  );

  return { tasks };
}
