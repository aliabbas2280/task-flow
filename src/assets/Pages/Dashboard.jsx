import SummaryCard from '../../Components/SummaryCard';


export default function Dashboard({ tasks = [] }) {

  const pendingCount = tasks.filter(t => t.status === "pending").length;
  const completedCount = tasks.filter(t => t.status === "completed").length;

  return (
    <div className="container mt-4">

      <h1 className="mb-4">Task Details :</h1>

      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <SummaryCard
            title="Complete Tasks"
            count={completedCount}
            color="bg-success text-white"
          />
        </div>

        <div className="col-md-3 mb-3">
          <SummaryCard
            title="Pending Tasks"
            count={pendingCount}
            color="bg-danger text-white"
          />
        </div>

        <div className="col-md-3 mb-3">
          <SummaryCard
            title="Categories"
            count={3}
            color="bg-primary text-white"
          />
        </div>
      </div>
      <div >
        <h1 style={{ padding: "1rem" }}> Task Managements :</h1>
        <div style={{ display: "flex", gap: "10px", padding: "1rem", flexWrap: "wrap", objectFit: "cover" }}>
          <img style={{ width: "350px", height: "300px" }} src="https://framerusercontent.com/images/tncShjwW1Mp1mPWA9MgIt4R53mY.png?width=1547&height=600" alt="A image" />
          <img style={{ width: "350px", height: "300px" }} src="https://plus.unsplash.com/premium_photo-1721936482448-1400b30b3c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" alt="A image" />
          <img style={{ width: "350px", height: "300px" }} src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" alt="A image" />
          <img style={{ width: "350px", height: "300px" }} src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="A image" />
          <img style={{ width: "350px", height: "300px" }} src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="A image" />
          <img style={{ width: "350px", height: "300px" }} src="https://images.unsplash.com/photo-1716703373229-b0e43de7dd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhc2slMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="A image" />

        </div>
      </div>
    </div>
  );
}
