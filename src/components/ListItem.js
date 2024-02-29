import React from "react";
import "../styles/listItem.css"; // Importez le fichier CSS

const ListItem = ({ text }) => {
  return (
    <li className="list-item">
      <span className="chevron mr-2"></span>{" "}
      {/* Utilisez une forme personnalisée */}
      {text}
    </li>
  );
};

export default ListItem;
