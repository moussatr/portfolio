import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Footer = () => {
  return (
    <footer class="text-center">
      <div class="container pt-4">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Rejoignez-moi sur les réseaux sociaux :</span>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/moussa-tr"
              class="me-4 text-reset"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/moussatr" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <p>Portfolio créé par Moussa Traore</p>
      </div>
    </footer>
  );
};

export default Footer;
