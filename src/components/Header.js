import React from "react";

const Header = () => {
  return (
    <header className=" p-4">
      {" "}
      {/* Ajoutez des classes Bootstrap pour le style */}
      <h1 className="text-primary mb-3">Moussa Traore - Portfolio</h1>
      <p>Téléphone: 07 58 48 29 52</p>
      <p>Email: traorelamoussa77@gmail.com</p>
      <p>Localisation: 94500 Champigny sur Marne</p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/moussa-tr">Moussa Traore</a>{" "}
        {/* Ajoutez une classe Bootstrap pour la couleur du texte */}
      </p>
      <p>
        GitHub: <a href="https://github.com/moussatr">moussatr</a>{" "}
        {/* Ajoutez une classe Bootstrap pour la couleur du texte */}
      </p>
    </header>
  );
};

export default Header;
