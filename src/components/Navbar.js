import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/portfolio">
          Portfolio
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <>
              <li class="nav-item">
                <Link className="nav-link" to="/profile">
                  Profil
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/experience">
                  Expérience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">
                  Éducation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  Compétences
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/interests">
                  Centres d'intérêt
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
