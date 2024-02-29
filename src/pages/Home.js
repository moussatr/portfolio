import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
// import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import "../styles/style.css";

const Home = () => {
  return (
    <div class="cards">
      <div class="card blue">
        {" "}
        <Header />
      </div>
      <main class="card green">
        <Section>
          <Section title1="Langues">
            <p>Français (C2)</p>
            <p>Anglais (B2)</p>
            <p>Bambara (Maternelle)</p>
          </Section>
          <Section title1="Compétences">
            <p>Langages de programmation et Framework :</p>
            <li>Javascript, React, React native, Nodejs,</li>
            <li>Java, Spring boot,</li>
            <li>PHP, Symfony, Laravel</li>
            <li>HTML, CSS,</li>
            <li>SQL, </li>
            <p>Logiciels :</p>
            <li>Android Studio, Eclipse, Visual Studio</li>
            <p>Méthodologie de développement : </p>
            <li>Agile</li>
          </Section>
        </Section>
      </main>
      <div class="card red">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
