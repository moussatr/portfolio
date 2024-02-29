import React from "react";

const Section = ({ title, children, title1 }) => {
  return (
    <section className="mt-4 mb-4">
      {" "}
      {/* Ajoutez des classes Bootstrap pour l'espacement */}
      <h2 className="text-dark mb-3">{title1}</h2>{" "}
      <h5 className="text-primary mb-3">{title}</h5>{" "}
      {/* Ajoutez des classes Bootstrap pour le style */}
      {children}
    </section>
  );
};

export default Section;
