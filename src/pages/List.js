import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filozoikes = [
    {
      id: 1,
      name: "Εθελοντική Δράση Ζωόφιλων Παπάγου Χολαργού",
      phone: "2101234567",
      email: "info@filozoiki-athens.gr",
      image: "/images/filozoiki-athens.jpg",
      location: "Αθήνα",
    },
    {
      id: 2,
      name: "Adopt a paw today",
      phone: "",
      email: "adoptapawtoday@gmail.com , info@adoptapawtoday.gr",
      image: "/images/filozoiki-thessaloniki.jpg",
      location: "Αττική-Νότια Προάστεια",
    },
    {
      id: 3,
      name: "Ermionidas Strays",
      phone: "6947585695",
      email: "ermionidastrays@gmail.com",
      image: "/images/filozoiki-piraeus.jpg",
      location: "Αργολίδα",
    },
    {
      id: 4,
      name: "Φιλοζωικό Σωματείο Σάμου",
      phone: "00306994237787",
      email: "samosanimalwelfareassociation@hotmail.com",
      image: "/images/filozoiki-patras.jpg",
      location: "Σάμος",
    },
    {
      id: 5,
      name: "Spectral stray action",
      phone: "6986618430",
      email: "spectralstrayaction@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Θεσσαλονίκη",
    },
    {
      id: 6,
      name: "Αλληλεγγύη στα Αδέσποτα - Solidarity for stray animals",
      phone: "6986618430",
      email: "info@solidaritystray.gr",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Βόρεια Προάστεια",
    },
    {
      id: 7,
      name: "Dogs' Voice",
      phone: "6986618430",
      email: "mariliatsopela@dogsvoice.gr",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική- Κέντρο Αθήνας",
    },
    {
      id: 8,
      name: "Πανελλήνιο Φιλοζικό - Φιλανθρωπικό Σωματείο Απόλλων",
      phone: "6976614058",
      email: "apollonshelter@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Θεσσαλονίκη",
    },
    {
      id: 9,
      name: "Σύλλογος Ζωόφιλων Μαραθώνα - Ελπίδα",
      phone: "6973043713",
      email: "venia33@yahoo.gr",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Ανατολικά Προάστεια",
    },
    {
      id: 10,
      name: "Animaid Animal Rescue",
      phone: "6932578700",
      email: "animaidrescue@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Δυτικά Προάστεια",
    },
    {
      id: 11,
      name: "Save the Strays of Samos",
      phone: "",
      email: "info@straysofsamos.org",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Σάμος",
    },
    {
      id: 12,
      name: "Φιλοζωική Δράση Ναυπάκτου",
      phone: "694 5392802",
      email: "filozoiki.n@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αιτωλοακαρνανία",
    },
    {
      id: 13,
      name: "Happy Paws Φιλοζωικη κ Περιβαλλοντική Ένωση Β.Ευβοιας",
      phone: "6983677397",
      email: "happypawsfilozoike@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Εύβοια",
    },
    {
      id: 14,
      name: "Φιλοζωική Ομάδα Ναυπλίου",
      phone: "",
      email: "filozoikiomadanafpliou@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Εύβοια",
    },
    {
      id: 15,
      name: "Sifnos for Animals - Φιλοζωικό σωματείο Σίφνου",
      phone: "",
      email: "sifnosforanimals@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Κυκλάδες",
    },
    {
      id: 16,
      name: "Σύλλογος Αγάπης για τα Ζώα - Βλάσσης",
      phone: "6976774532",
      email: "info@vlassis.org",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Κόρινθος",
    },
    {
      id: 17,
      name: "Smart Paws Greece - Save A Stray",
      phone: "6971971603",
      email: "canifesto@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Λακωνία",
    },
    {
      id: 18,
      name: "Φιλόζωοι Εθελοντές Δήμου Διρφύων Μεσσαπίων",
      phone: "6971234567",
      email: "ethelontesfilddm@yahoo.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Εύβοια",
    },
    {
      id: 19,
      name: "Ζωοφιλική Ένωση Ναυπλίου",
      phone: "697 077 2044",
      email: "info.zenafpliou@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αργολίδα",
    },
    {
      id: 20,
      name: "Romi Animal Rescue",
      phone: "6982005800",
      email: "romianimalrescue@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Νότια Προάστεια",
    },
    {
      id: 21,
      name: "Φιλοζωικό Σωματείο Εορδαίας Αδέσποτη Στοργή",
      phone: "6978837970",
      email: "AssociationStrayAffection.2018@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Πτολεμαϊδα",
    },
    {
      id: 22,
      name: "PAWS - Paros Animal Welfare Society",
      phone: "6974 870 866",
      email: "pawsparostripiti@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Κυκλάδες",
    },
    {
      id: 23,
      name: "Πε.Φι.Πο. Αμαρουσίου",
      phone: "6985567216",
      email: "pefipomaroussi@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Βόρεια Προάστεια",
    },
    {
      id: 24,
      name: "Φιλοζωικό Σωματείο Make it Pawsible",
      phone: "2105715403",
      email: "makeitpawsible@yahoo.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Δυτικά Προάστεια",
    },
    {
      id: 25,
      name: "Animal Welfare Karpathos - Φιλoζωική Δράση Καρπάθου",
      phone: "",
      email: "Adopt@AnimalWelfareKarpathos.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Δωδεκάνησα",
    },
    {
      id: 26,
      name: "Άριελ Φιλοζωική Δήμου Δέλτα",
      phone: "6947642478",
      email: "ariel.filozwiki@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Θεσσαλονίκη",
    },
    {
      id: 27,
      name: "ΚυΜα ΟΕΦ Ομάδα Εθελοντών Φιλόζωων Κυμίνων -Μαλγάρων & Φίλων",
      phone: "6936 103 202 ",
      email: "oef.kyma@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Θεσσαλονίκη",
    },
    {
      id: 28,
      name: "Καταφύγιο Ζώων - Animal Refuge",
      phone: "",
      email: "animalrefuge.katafigiozoon@gmail.com",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Θεσσαλονίκη",
    },
    {
      id: 29,
      name: "The Invaluables Animal Rescue",
      phone: "6979245356",
      email: "antie@theinvaluables.org",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Αττική-Νότια Προάστεια",
    },
    {
      id: 30,
      name: "Δήμος Καβάλας - Καταφύγιο Ζώων Συντροφιάς",
      phone: "2513500371",
      email: "pets@kavala.gov.gr",
      image: "/images/filozoiki-chalkida.jpg",
      location: "Καβάλα",
    },
  ];

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const closeModal = () => {
    setSelectedGroup(null);
  };

  // Φιλτράρισμα των ομάδων ανάλογα με τον όρο αναζήτησης
  const filteredGroups = filozoikes.filter((group) =>
    group.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="list-section">
      <h1>Λίστα Φιλοζωικών Ομάδων</h1>

      {/* Input για την αναζήτηση */}
      <input
        type="text"
        placeholder="Αναζήτηση ανά περιοχή..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="filozoikes-grid">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <div
              key={group.id}
              className="filozoiki-item"
              onClick={() => handleGroupClick(group)}
            >
              {group.name}
            </div>
          ))
        ) : (
          <p>Δεν βρέθηκαν αποτελέσματα για την περιοχή "{searchTerm}"</p>
        )}
      </div>

      {/* Modal */}
      {selectedGroup && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedGroup.image}
              alt={selectedGroup.name}
              className="modal-image"
            />
            <p>
              <strong>Τηλέφωνο:</strong> {selectedGroup.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedGroup.email}
            </p>
            <p>
              <strong>Περιοχή:</strong> {selectedGroup.location}
            </p>
            <button onClick={closeModal}>Κλείσιμο</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default List;
