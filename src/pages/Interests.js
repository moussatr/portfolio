import React from "react";
// import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "../styles/style.css";

const Interests = () => {
  return (
    <div class="cards">
      {/* <div class="card blue">
        {" "}
        <Header />
      </div> */}
      <main class="card green">
        <Section title1="Centres d'Intérêt">
          <p>Sports: football, série film</p>
          {/* Ajoutez d'autres centres d'intérêt si nécessaire */}
        </Section>
      </main>
      <div class="card red">
        <Footer />
      </div>
    </div>
  );
};

export default Interests;
