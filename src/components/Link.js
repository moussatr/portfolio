import React from "react";

const Link = ({ url, text }) => {
  return (
    <a href={url} className="btn btn-primary">
      {text}
    </a>
  ); // Ajoutez la classe "btn btn-primary" pour un bouton Bootstrap
};

export default Link;
