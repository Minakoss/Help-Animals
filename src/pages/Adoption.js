import React from "react";
import { useNavigate } from "react-router-dom";
import "./Adoption.css";

const Adoption = () => {
  const navigate = useNavigate(); // Χρησιμοποιούμε το useNavigate για πλοήγηση

  const handlePostAdClick = () => {
    navigate("/adoptionform"); // Η διαδρομή για τη φόρμα υιοθεσίας
  };

  return (
    <section className="adoption-services">
      <h2>Υιοθεσία Κατοικιδίων</h2>
      <div className="adoption-service-cards">
        {/* Πρώτη σειρά */}
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img
                src="/adoption/cat1.jpg"
                alt="Υγειονομική Βοήθεια για Κατοικίδια"
              />
            </div>
            <div className="adoption-card-back">
              <h3>Όλιβ</h3>
              <p>
                3 μηνών! Έχει κάνει και 2 εμβόλια! Προς Υιοθεσία. Βρίσκοται
                Κατερίνη αλλά μπορεί να μεταφερθει οπουδήποτε. Θα δοθεί με
                χαρτιά υιοθεσίας και βιβλιάριο. Επικοινωνία στο 6937420605
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/cat2.jpg" alt="Υιοθεσία Κατοικιδίων" />
            </div>
            <div className="adoption-card-back">
              <h3>Γκουφυ</h3>
              <p>
                Γεννημένος τον Μάιο του 2024 Τηλ. επικοινωνίας: 6944446580 Θα
                δοθεί μόνο εντός Αττικής με συμβόλαιο υιοθεσίας, προϋπόθεση
                στείρωσης και μικροτσίπ, το κόστος του οποίου επιβαρύνει το νέο
                γονιό καθώς και με την προϋπόθεση στείρωσης στην κατάλληλη
                ηλικία.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img
                src="/adoption/dog1.jpg"
                alt="Τροφές & Εφόδια για Κατοικίδια"
              />
            </div>
            <div className="adoption-card-back">
              <h3>Προς υιοθεσια</h3>
              <p>
                Σκυλακι περίπου 2 μηνών που θα γίνει μέχρι 20 κιλά. Είναι ένα
                χαρούμενο πλασματάκι, κάπως σοβαρό για κουτάβι και πανέξυπνη.
                Φιλοξενείται σε ένα χωριό των Γρεβενών. Αναζητούμε ένα μόνιμο
                σπιτάκι για αυτήν. Μεταφέρεται Θεσσαλονίκη ή Αθήνα.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog2.jpg" alt="Εθελοντική δράση" />
            </div>
            <div className="adoption-card-back">
              <h3>Νταίζη</h3>
              <p>
                11 κιλά, 11 χρονών.Η άτυχη σκυλίτσα βρέθηκε πριν κάποιους μήνες
                παρατημένη μέσα σε διαμέρισμα. χρειάζεται ηρεμία και έναν
                άνθρωπο με υπομονή και αγάπη. Δεν τα πάει καλα με γάτες και
                θηλυκά σκυλιά. θέλει λίγο χρόνο να ξανα εμπιστευτεί!
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Δεύτερη σειρά */}
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog3.jpg" alt="Φροντίδα Σκύλων" />
            </div>
            <div className="adoption-card-back">
              <h3>Προς υιοθεσια</h3>
              <p>
                Μικρόσωμος κοκονακος περίπου 9 κιλά. Βοηθήστε τον Κοντό μας να
                βρει ένα σπίτι.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog4.jpg" alt="Φροντίδα Γατών" />
            </div>
            <div className="adoption-card-back">
              <h3>Εξαφάνιση σκυλίτσας</h3>
              <p>
                Η σκυλίτσα της φωτογραφίας έχει χαθεί εδώ και μια εβδομάδα από
                Θρακομακεδόνες, Αχαρνές. Παρακαλώ πολύ οποίος τη δει ή γνωρίζει
                το οτιδήποτε ας με καλέσει στο 6973070269 οποιαδήποτε ώρα. Είναι
                στειρωμένη με chip του δήμου Αχαρνών.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog5.jpg" alt="Υιοθεσία Κουταβιών" />
            </div>
            <div className="adoption-card-back">
              <h3>Υιοθεσία Κουταβιών</h3>
              <p>
                Σκυλάκος 6 μηνων δινεται προς υιοθεσια, θηλυκο σκυλάκι ημιαιμο
                λαμπραντορακι 6 μηνων , που βρέθηκε στο Τεχνολογικό Παρκο
                Γαλλικής Εταιρίας του Δ. Λαυρεωτικης. Η σκυλίτσα θα δωθει με
                εξετάσεις εμβολιασμό και στειρωμενη.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog6.jpg" alt="Εθελοντική δράση με γάτες" />
            </div>
            <div className="adoption-card-back">
              <h3>Tiger</h3>
              <p>
                1 έτους, Εμβολιασμενος, Αποπαρασιτωμενος. Ζει σε σπίτι
                προσωρινά, δεν λερώνει μέσα ποτέ! Δεν κάνει ζημιές(ποτέ!).
                Γνωρίζει από εντολές. Υπάκουος, τρομερός με τα σκυλιά και με
                τους ανθρώπους. Αγαπα πάρα πολύ ανθρώπους και ζώα Είναι ο
                ιδανικος σύντροφος. Ημίαιμος πιτμπουλακος.
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/cat-adoption.jpg"
                  alt="ΠΑΝΕΛΛΗΝΙΑ ΟΜΑΔΑ ΓΙΑ ΤΑ ΑΔΕΣΠΟΤΑ ΖΩΑ"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog7.jpg" alt="Εθελοντική δράση με γάτες" />
            </div>
            <div className="adoption-card-back">
              <h3>Ντία</h3>
              <p>
                Ημίαιμο Γκριφον 17 κιλά, στειρωμενη, εμβολιασμενη με τσιπάκι.
                Ηλικία 5 ετών. Πενταλοφος Θεσσαλονίκης
              </p>
              <a
                href="https://www.facebook.com/groups/72816494454/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/cat-adoption.jpg" alt="ΓΚΡΙΦΟΝΟΚΑΤΑΣΤΑΣΕΙΣ" />
              </a>
            </div>
          </div>
        </div>
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog8.jpg" alt="Εθελοντική δράση με γάτες" />
            </div>
            <div className="adoption-card-back">
              <h3>Κουτάβι προς υιοθεσια</h3>
              <p>
                7-8 μηνών, βρίσκεται στο δρόμο σε χωριό της Θεσσαλονίκης.
                Τηλέφωνο επικοινωνίας 6970308327
              </p>
              <a
                href="https://www.facebook.com/groups/1715011762679692"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/cat-adoption.jpg" alt="ΓΡΙΦΟΝΟΚΑΤΑΣΤΑΣΕΙΣ" />
              </a>
            </div>
          </div>
        </div>
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog9.jpg" alt="Εθελοντική δράση με γάτες" />
            </div>
            <div className="adoption-card-back">
              <h3>Μάικ</h3>
              <p>
                Ημίαιμο Γκριφον, 3,5 χρονών, 7,700kg.
                Εμβολιασμενος,αποπαρασιτωμενος ,στειρωμενος με μικροτσίπ Θα
                δοθεί με συμβόλαιο υιοθεσίας. Είναι ήσυχος στο σπίτι, ήσυχος με
                τα σκυλια και τα παιδιά. Παιχνιδιαρης και κάνει την ανάγκη του
                στη βόλτα.
              </p>
              <a
                href="https://www.facebook.com/groups/1715011762679692"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/cat-adoption.jpg" alt="ΓΚΡΙΦΟΝΟΚΑΤΑΣΤΑΣΕΙΣ" />
              </a>
            </div>
          </div>
        </div>
        <div className="adoption-card">
          <div className="adoption-card-inner">
            <div className="adoption-card-front">
              <img src="/adoption/dog10.jpg" alt="Εθελοντική δράση με γάτες" />
            </div>
            <div className="adoption-card-back">
              <h3>Χρηστάκης</h3>
              <p>
                Είναι 4 μηνών και δεν θα γίνει πολύ μεγάλος . Έχει τσιπ και
                είναι εμβόλιασμενος. Βρίσκεται σε χωριό των Σερρών και δίνεται
                με όλες τις νόμιμες διαδικασίες.
              </p>
              <a
                href="https://www.facebook.com/groups/1715011762679692"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/cat-adoption.jpg" alt="ΓΚΡΙΦΟΝΟΚΑΤΑΣΤΑΣΕΙΣ" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Κουμπί Καταχώρησης Αγγελίας */}
      <div className="ad-button-container">
        <button className="ad-post-button" onClick={handlePostAdClick}>
          Καταχώρηση Αγγελίας
        </button>
      </div>
    </section>
  );
};

export default Adoption;
