import React, { useState } from "react";
import "./AdoptionForm.css";

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    breed: "",
    age: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Εδώ μπορείς να στείλεις τα δεδομένα σε έναν server ή να τα διαχειριστείς όπως χρειάζεται
  };

  return (
    <section className="adoption-form-section">
      <h2>Καταχώρηση Αγγελίας</h2>
      <form className="adoption-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="petName">Όνομα Ζώου:</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="species">Είδος Ζώου:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="breed">Φυλή:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Ηλικία:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Περιγραφή:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Όνομα Επικοινωνίας:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Email Επικοινωνίας:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">Τηλέφωνο Επικοινωνίας:</label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Καταχώρηση Αγγελίας
        </button>
      </form>
    </section>
  );
};

export default AdoptionForm;
