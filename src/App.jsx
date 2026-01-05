import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./assets/pages/Dashboard";
import Task from "./assets/pages/Task";
import NewTask from "./assets/pages/Newtask";
import Activity from "./assets/pages/Activity";
import Header from "./Components/Header";
import Setting from "./assets/Pages/Setting";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem("activities");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const logActivity = (message) => {
    setActivities(prev => [
      { id: Date.now(), message, time: new Date().toLocaleString() },
      ...prev,
    ]);
  };

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
    logActivity(`Task "${task.title}" added`);
  };

  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(t => t.id === updatedTask.id ? updatedTask : t)
    );
    logActivity(`Task "${updatedTask.title}" updated`);
  };

  const deleteTask = (id) => {
    const task = tasks.find(t => t.id === id);
    setTasks(prev => prev.filter(t => t.id !== id));
    logActivity(`Task "${task?.title}" deleted`);
  };

  const toggleTaskStatus = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending"
          }
          : task
      )
    );

    const task = tasks.find(t => t.id === id);
    if (task) {
      const newStatus = task.status === "pending" ? "completed" : "pending";
      logActivity(`Task "${task.title}" marked as ${newStatus}`);
    }
  };


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} />} />
        <Route
          path="/task"
          element={
            <Task
              tasks={tasks}
              onDelete={deleteTask}
              onToggleStatus={toggleTaskStatus}
            />
          }
        />

        <Route
          path="/task/new"
          element={
            <NewTask
              tasks={tasks}
              onAddTask={addTask}
              onUpdateTask={updateTask}
            />
          }
        />
        <Route path="/activity" element={<Activity activities={activities} />} />
        <Route path="/setting" element={<Setting onClearActivity={() => setActivities([])} />} />
      </Routes>
    </>
  );
}

export default App;
