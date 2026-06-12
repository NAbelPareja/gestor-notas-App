import { NavLink } from "react-router-dom";
import "../styles/main.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container-fluid px-5 valor1">
          <NavLink className="navbar-brand miLink" href="#">
            Tareas-app
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
          <div
            className="collapse navbar-collapse justify-content-end  py-3"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link miLink" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/notas" className="nav-link miLink" href="#">
                  Notas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
