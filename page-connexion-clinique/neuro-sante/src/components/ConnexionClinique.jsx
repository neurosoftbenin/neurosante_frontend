import React, { useState } from 'react';
import '../styles/ConnexionClinique.css';

function ConnexionClinique() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [specialites, setSpecialites] = useState(['']);
  const [disponibilites, setDisponibilites] = useState([{ jour: '', heureDebut: '', heureFin: '' }]);
  const [confirmation, setConfirmation] = useState('');

  const handleSpecialiteChange = (index, value) => {
    const updated = [...specialites];
    updated[index] = value;
    setSpecialites(updated);
  };

  const ajouterSpecialite = () => setSpecialites([...specialites, '']);

  const retirerSpecialite = (index) => {
    const updated = [...specialites];
    updated.splice(index, 1);
    setSpecialites(updated);
  };

  const handleDisponibiliteChange = (index, field, value) => {
    const updated = [...disponibilites];
    updated[index][field] = value;
    setDisponibilites(updated);
  };

  const ajouterDisponibilite = () =>
    setDisponibilites([...disponibilites, { jour: '', heureDebut: '', heureFin: '' }]);

  const retirerDisponibilite = (index) => {
    const updated = [...disponibilites];
    updated.splice(index, 1);
    setDisponibilites(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nom,
      email,
      localisation,
      motDePasse,
      specialites: specialites.filter(s => s.trim() !== ''),
      disponibilites,
    };
    console.log('Clinique enregistrée :', data);
    setConfirmation(`Clinique "${nom}" enregistrée avec ${data.specialites.length} spécialité(s) et ${data.disponibilites.length} disponibilité(s).`);
  };

  return (
    <div className="connexion-container">
      <h2>Inscription Clinique – Neuro-Santé</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Nom de la clinique</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />

          <label>Email professionnel</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Mot de passe</label>
          <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />

          <label>Localisation</label>
          <input type="text" value={localisation} onChange={(e) => setLocalisation(e.target.value)} required />
        </div>

        <div className="form-section">
          <label>Spécialités proposées</label>
          {specialites.map((s, i) => (
            <div key={i} className="row-group">
              <input
                type="text"
                placeholder={`Spécialité ${i + 1}`}
                value={s}
                onChange={(e) => handleSpecialiteChange(i, e.target.value)}
                required
              />
              {specialites.length > 1 && (
                <button type="button" className="link-btn" onClick={() => retirerSpecialite(i)}>
                  Retirer
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={ajouterSpecialite}>
            Ajouter une spécialité
          </button>
        </div>

        <div className="form-section">
          <label>Disponibilités</label>
          {disponibilites.map((d, i) => (
            <div key={i} className="row-group">
              <input
                type="text"
                placeholder="Jour (ex: Lundi)"
                value={d.jour}
                onChange={(e) => handleDisponibiliteChange(i, 'jour', e.target.value)}
                required
              />
              <input
                type="time"
                value={d.heureDebut}
                onChange={(e) => handleDisponibiliteChange(i, 'heureDebut', e.target.value)}
                required
              />
              <input
                type="time"
                value={d.heureFin}
                onChange={(e) => handleDisponibiliteChange(i, 'heureFin', e.target.value)}
                required
              />
              {disponibilites.length > 1 && (
                <button type="button" className="link-btn" onClick={() => retirerDisponibilite(i)}>
                  Retirer
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-btn" onClick={ajouterDisponibilite}>
            Ajouter une disponibilité
          </button>
        </div>

        <button type="submit" className="submit-btn">Enregistrer la clinique</button>
      </form>

      {confirmation && <div className="confirmation">{confirmation}</div>}
    </div>
  );
}

export default ConnexionClinique;
