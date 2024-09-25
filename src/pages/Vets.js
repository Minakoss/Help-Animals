import React, { useState } from "react";
import "./Vets.css";

const Vets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVet, setSelectedVet] = useState(null);

  const vets = [
    {
      id: 1,
      name: "Κτηνιατρικό κέντρο Γέρακα",
      region: "Αθήνα",
      address: "Ερμού 8, Γαργηττός, 153 44 Γέρακας Αττικής ",
      phone: "2117005677",
    },
    {
      id: 2,
      name: "Δέρβα Αλεξάνδρα - Νίκη - Health Pets",
      region: "Αθήνα",
      address: "Αδελφών Πιερράκου 41, Άνω Ιλίσια, 157 71 Ζωγράφος Αττικής ",
      phone: "2107794242",
      mobile: "6942928817",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    {
      id: 3,
      name: "Petworld",
      region: "Αθήνα",
      address: "Λεωφόρος Παπανδρέου Γεωργίου 45, 157 73 Ζωγράφος Αττικής  ",
      phone: "2107782981",
      mobile: "6932479168",
    },
    // Πρόσθεσε περισσότερες ομάδες αν χρειάζεται
  ];

  // Φιλτράρισμα των ομάδων ανάλογα με το αναζητούμενο κείμενο
  const filteredVets = vets.filter((vet) =>
    vet.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Λειτουργία για εμφάνιση των λεπτομερειών της επιλεγμένης ομάδας
  const handleVetClick = (vet) => {
    setSelectedVet(vet);
  };

  // Κλείσιμο του modal
  const closeModal = () => {
    setSelectedVet(null);
  };

  return (
    <section className="list-section">
      <h1>Λίστα Κτηνιατρίων</h1>

      {/* Μπάρα Αναζήτησης στο κέντρο */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Αναζητήστε περιοχή..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Λίστα φιλοζωικών ομάδων */}
      <div className="filozoikes-grid">
        {filteredVets.length > 0 ? (
          filteredVets.map((group) => (
            <div
              key={group.id}
              className="filozoiki-item"
              onClick={() => handleVetClick(group)}
            >
              <img
                src={group.image}
                alt={group.name}
                className="filozoiki-image"
              />
            </div>
          ))
        ) : (
          <p>Δεν βρέθηκαν ομάδες για την περιοχή που αναζητήσατε.</p>
        )}
      </div>

      {/* Modal με τις λεπτομέρειες της επιλεγμένης ομάδας */}
      {selectedVet && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedVet.image}
              alt={selectedVet.name}
              className="modal-image"
            />

            <p>
              <strong>Διεύθυνση:</strong> {selectedVet.address}
            </p>
            <p>
              <strong>Πόλη:</strong> {selectedVet.region}
            </p>
            <p>
              <strong>Τηλέφωνο:</strong> {selectedVet.phone}
            </p>
            <p>
              <strong>Κινητό:</strong> {selectedVet.mobile}
            </p>
            <button onClick={closeModal}>Κλείσιμο</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Vets;
