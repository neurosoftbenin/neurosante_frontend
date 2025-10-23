import React, { useState } from 'react';
import '../styles/Formulaire.css';

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    email: '',
    telephone: '',
    clinique: '',
    rendezVous: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demande de rendez-vous Neurosanté :', formData);
    alert('✅ Rendez-vous enregistré avec succès !');
  };

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <h1 className="titre">🧠 Prise de rendez-vous - Neurosanté</h1>

      <label>Nom :
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
      </label>

      <label>Prénom :
        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
      </label>

      <label>Âge :
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>

      <label>Email :
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label>Téléphone :
        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
      </label>

      <label>Choix de la clinique :
        <select name="clinique" value={formData.clinique} onChange={handleChange} required>
          <option value="">-- Sélectionner une clinique --</option>
          <option value="Clinique Centrale">Clinique Centrale</option>
          <option value="Clinique Sainte-Marie">Clinique Sainte-Marie</option>
          <option value="Clinique du Cœur">Clinique du Cœur</option>
          <option value="Centre NeuroSanté Lokossa">Centre NeuroSanté Lokossa</option>
        </select>
      </label>

      <label>Date du rendez-vous :
        <input type="date" name="rendezVous" value={formData.rendezVous} onChange={handleChange} required />
      </label>

      <label>Détails du rendez-vous :
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Motif de la consultation, symptômes, préférences horaires..."
          rows="4"
        />
      </label>

      <button type="submit">📅 Réserver le rendez-vous</button>
    </form>
  );
}

export default Formulaire;
