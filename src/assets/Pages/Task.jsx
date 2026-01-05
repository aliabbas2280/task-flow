import TaskCard from "../../Components/TaskItem";
import { useNavigate } from "react-router-dom";

export default function Task({ tasks, onDelete, onToggleStatus }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1>All Tasks</h1>

      <div className="d-flex flex-wrap gap-3 mt-3">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={() => navigate(`/task/new?id=${task.id}`)}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </div>
  );
}
