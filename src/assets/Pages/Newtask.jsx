import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function NewTask({ tasks, onAddTask, onUpdateTask }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const editId = params.get("id");
  const editingTask = tasks.find(t => t.id === Number(editId));

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
      setImage(editingTask.image || "");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title,
        priority,
        image,
        status: editingTask.status,
      });
    } else {
      onAddTask({
        id: Date.now(),
        title,
        status: "pending",
        priority,
        image,
      });
    }

    navigate("/task");
  };

  return (
    <div className="container mt-4">
      <h1>{editingTask ? "Edit Task" : "Create New Task"}</h1>

      <form className="card p-4 mt-3" onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="form-select mb-3"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          className="form-control mb-3"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-primary">
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}
