import React from "react";
// import Header from "../components/Header";
import Section from "../components/Section";
// import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import "../styles/style.css";

const Education = () => {
  return (
    <div class="cards">
      {/* <div class="card blue">
        {" "}
        <Header />
      </div> */}

      <main class="card green">
        <Section title1="Formation" className="mt-5">
          {" "}
          <Section title="ECE Paris   2022 - 2023">
            <p>Bachelor Numérique Développement Web et Mobile</p>
          </Section>
          <Section title="Faculté Des Sciences Et Techniques De Bamako-          Mali    2018 - 2021 ">
            <p>Licence de Mathématiques </p>
            <p>
              Parcours : Mathématiques, Physique, Chimie, informatiques ( MPCI
              système LMD ){" "}
            </p>
          </Section>
          <Section title="Lycée Privé Alou Koné  Mali    2014 - 2017">
            <p>Baccalauréat</p>
            <p>
              Option: sciences exactes (Mathématique, Physique, Chimie et
              Biologie){" "}
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

export default Education;
