import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">
          TaskFlow
        </NavLink>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/"
              >
                Dashboard
              </NavLink>
            </li>
             <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/task/new"
              >
                New Task
              </NavLink>
            <li className="nav-item">
              
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/task"
              >
                Tasks
              </NavLink>
            </li>
            <li className="nav-item">
             
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/activity"
              >
                Activity
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                to="/setting"
              >
                Settings
              </NavLink>
            </li>
          </ul>

      
        </div>

      </div>
    </nav>
  );
}
