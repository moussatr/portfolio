import React from "react";
// import Header from "../components/Header";
import Section from "../components/Section";
// import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import "../styles/style.css";

const Projects = () => {
  return (
    <div class="cards">
      {/* <div class="card blue">
        {" "}
        <Header />
      </div> */}
      <main class="card green">
        <Section title1="Projets Réalisés">
          <Section title="Réalisation du projet Quiz Médical">
            <p>
              Réalisation du projet Quiz Médical avec Symfony et docker en
              utilisant bootstrap 5 . La plateforme Quiz Médical est destiné a
              aidé les utilisateurs de prévenir les risques d'hypertension
              artérielle : 1 mois Création de l'application mobile SWS Présence
              avec React Native en utilisant une api rest développer en nodejs :
              3 mois
            </p>
          </Section>
          <Section title="Développement du site web de l'entreprise"></Section>
          <Section title="Projet de fin d’étude - ECE">
            <p>
              La mise en place d’un module web dynamique de bourse d’échange de
              parts à céder dans le cadre d’un projet de digitalisation de SCPI
              : 1 mois Les grands points : Gestion de transactions Système de
              recherche avancé pour permettre aux utilisateurs de rechercher et
              d’acheter des parts disponible en vente.
              https://github.com/moussatr
            </p>
          </Section>
        </Section>
      </main>
      <div class="card red">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
