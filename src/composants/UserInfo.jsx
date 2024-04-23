import React, { useState, useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState(null); // Initialiser à null

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/contacts", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }
        return response.json();
      })
      .then((result) => setContacts(result))
      .catch((error) => console.error("Erreur :", error)); // Afficher l'erreur
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {contacts === null ? (
        <p>Chargement...</p>
      ) : (
        contacts.map((contact) => (
          <div className="container" key={contact.id}>
            <p>
              <span className="gras">Nom </span>: {contact.nom}
            </p>
            <p>
              <span className="gras">Email </span>: {contact.email}
            </p>
            <img src={process.env.PUBLIC_URL + '/img/' + contact.img} alt={contact.nom} /> {/* Ajout d'un attribut alt */}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
