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
      id: 4,
      name: "Νοσοκομείο Ζώων Αθηνών Α.Ε.",
      region: "Πικέρμι Ατικκής",
      address: "2ο χλμ. Λεωφόρος Μαραθώνος, Τ.Κ:19009 ",
      phone: "21 0603 8024",
      hours: "Ανοιχτά όλο το 24ωρο",
    },
    {
      id: 5,
      name: "Αττικό Νοσοκομείο Ζώων",
      region: "Παιανία",
      address: "20ο χλμ Λαυρίου, Παιανία 190 02 ",
      phone: "210664 0552",
      hours: "Ανοιχτά όλο το 24ωρο",
    },
    {
      id: 6,
      name: "Κτηνιατρικό Κέντρο Γέρακα",
      region: "Γέρακας Αττικής",
      address: "Ερμού 8, Γαργηττός, 153 44  ",
      phone: "210664 0552",
      hours: "Ανοιχτά όλο το 24ωρο",
    },
    {
      id: 7,
      name: "Πλακεντία Κτηνιατρική Κλινική",
      region: "Αγία Παρασκευή",
      address: "Αλ. Παναγούλη 31, Αγ. Παρασκευή 153 43 ",
      phone: "21 0608 2309",
      hours: "Ανοιχτά όλο το 24ωρο",
    },
    {
      id: 8,
      name: "Hospetal",
      region: "Καλλιθέα",
      address: "Λεωφ. Ανδρέα Συγγρού 226, Καλλιθέα 176 72 ",
      phone: "21070002226",
      hours: "Ανοιχτά όλο το 24ωρο",
    },
    {
      id: 9,
      name: "Νοσοκομείο Μικρών Ζώων Κυανούς Σταυρός",
      region: "Χαλκίδα",
      address: "Πολυτεχνείου 1, Νέα Λάμψακος - Παραλία, 34150,   ",
      phone: "2221080596",
      mobile: "6980600602",
      hours: "",
      email: "tapoutianimalhospital@gmail.com",
    },
    {
      id: 10,
      name: "Χατζηκώστας Αριστοτέλης",
      region: "Αρτέμιδα - Βραυρώνα",
      address: "Λεωφόρος Βραυρώνος 65 ",
      phone: "22940 47271",
      mobile: "6977 053891",
      hours: "Δευτ. – Παρ.: 09:00 – 13:00 & 17:00 – 21:00",
    },
    {
      id: 11,
      name: "Πασχαλινοπούλου Μαριλού",
      region: "Νέα Μάκρη Ατιικής",
      address: "Λεωφόρος Μαραθώνος 59, 190 05 ς  ",
      phone: "2294090030",
      mobile: "6980367736",
    },
    {
      id: 12,
      name: "Παπαδημητρίου Δημήτριος",
      region: "Ραφήνα",
      address: " Παπαδιαμάντη 1 & Ναρκίσσου 4, Έναντι ΙΚΑ, 19009,",
      phone: "2294098101",
      mobile: "6948886304",
    },
    {
      id: 13,
      name: "Γαμποπούλου Ανθή",
      region: "Πόρτο Ράφτη Αττικής",
      address: "Λεωφόρος Πόρτο Ράφτη, 190 03 Λιμένας Μαρκοπούλου",
      phone: "2299026079",
      mobile: "6944335388",
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
            <p>
              <strong>email:</strong> {selectedVet.email}
            </p>
            <p>
              <strong>Ωράριο Λειτουργίας:</strong> {selectedVet.hours}
            </p>
            <button onClick={closeModal}>Κλείσιμο</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Vets;
