export default function Activity({ activities }) {
  return (
    <div className="container mt-4">
      <h1>Activity Log</h1>

      {activities.length === 0 ? (
        <div className="alert alert-info mt-3">
          No activity yet
        </div>
      ) : (
        <ul className="list-group mt-3">
          {activities.map(act => (
            <li key={act.id} className="list-group-item">
              <div>{act.message}</div>
              <small className="text-muted">{act.time}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
