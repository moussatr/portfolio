import React from "react";
// import Header from "../components/Header";
import Section from "../components/Section";
// import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import "../styles/style.css";

const Experience = () => {
  return (
    <div class="cards">
      {/* <div class="card blue">
        {" "}
        <Header />
      </div> */}
      <main class="card green">
        <Section title1="Parcours Professionnel">
          <Section title=" Stage développeur Full Stack | AVRIL 2023 - AOUT 2023 ">
            <p>
              Réalisation d'une API de synchronisation des données entre le
              backend d'une boutique en ligne développée en utilisant React et
              le logiciel de gestion d'entreprise (sallsabeel) :
              <li> Créer des composants web réutilisables</li>
              <li>Interagir avec une API backend</li>
              <li>Tout cela en suivant une architecture orientée composant</li>
              Langage : JavaScript <br />
              Plateforme de développement : Nodejs
            </p>
          </Section>
          <Section title="Stage développeur web Mai 2022 - juillet 2022">
            <p>
              Développement du site web de l'entreprise : de la rédaction du
              cahier de charge, à la conception du site.
            </p>
            <p>Langages : html, css, javascript, php, bootstrap</p>
          </Section>
        </Section>
      </main>
      <div class="card red">
        <Footer />
      </div>
    </div>
  );
};

export default Experience;
