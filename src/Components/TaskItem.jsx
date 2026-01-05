import "./TaskStyle.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskCard({ task, onDelete, onEdit, onToggleStatus }) {
  return (
    <div className="card task-card mb-3 shadow-sm" style={{ maxWidth: "500px" }}>
      {task.image && (
        <img
          src={task.image}
          className="card-img-top task-image"
          alt={task.title}
          style={{ width: "350px" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={task.status === "completed"}
            onChange={() => onToggleStatus && onToggleStatus(task.id)}
          />
          {task.title}
        </h5>
        <p className="card-text text-muted">
          Status: {task.status} {task.priority && `| Priority: ${task.priority}`}
        </p>

        <div className="d-flex gap-3">
          {onEdit && (
            <button
              className="btn btn-warning btn-sm d-flex align-items-center gap-2"
              onClick={() => onEdit(task)}
            >

              Edit
              <FaEdit />
            </button>
          )}

          {onDelete && (
            <button
              className="btn btn-danger btn-sm d-flex align-items-center gap-2"
              onClick={() => onDelete(task.id)}
            >

              Delete
              <FaTrash />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
