import React from "react";
// import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "../styles/style.css";

const Profile = () => {
  return (
    <div class="cards">
      {/* <div class="card blue">
        {" "}
        <Header />
      </div> */}
      <main class="card green">
        <Section title1="Profil Professionnel">
          <p>
            Titulaire d'un Bachelor en développement web et mobile et d'une
            licence en mathématiques, je suis à la recherche d'un contrat
            d'alternance. Rigoureux et dynamique, je cherche à appliquer mes
            compétences informatiques et mathématiques à la gestion
            d'entreprise.
          </p>
        </Section>
      </main>
      <div class="card red">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
