export default function Setting({ onClearActivity }) {
  return (
    <div className="container mt-4">
      <h1>Settings</h1>


      <div className="card p-4 mt-4 border border-danger">
        <h5>All Clear</h5>
        <button className="btn btn-danger mt-3" onClick={onClearActivity}>
          Clear Activity Log
        </button>
      </div>
    </div>
  );
}
