import React, { useState, useEffect } from 'react';
import '../styles/PriseRendezVous.css';

function PriseRendezVous() {
  const [cliniqueId, setCliniqueId] = useState('');
  const [specialites, setSpecialites] = useState([]);
  const [specialiteId, setSpecialiteId] = useState('');
  const [date, setDate] = useState('');
  const [motif, setMotif] = useState('');
  const [confirmation, setConfirmation] = useState('');

  useEffect(() => {
    if (cliniqueId) {
      fetch(`http://localhost:4000/api/specialites?cliniqueId=${cliniqueId}`)
        .then(res => res.json())
        .then(data => setSpecialites(data));
    }
  }, [cliniqueId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rendezVous = {
      cliniqueId,
      specialiteId,
      date,
      motif,
    };

    fetch('http://localhost:4000/api/rendezvous', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rendezVous),
    })
      .then(res => res.json())
      .then(() => {
        setConfirmation(`🩺 Rendez-vous confirmé pour le ${new Date(date).toLocaleString()}`);
      });
  };

  return (
    <div className="rdv-page">
      <div className="background-title">Neuro Santé</div>

      <div className="rdv-container">
        <h1 className="rdv-heading">Planifiez votre moment de soin</h1>
        <p className="rdv-description">Choisissez votre spécialité, votre horaire, et laissez-nous prendre soin de vous.</p>

        <form className="rdv-form" onSubmit={handleSubmit}>
          <div className="rdv-group">
            <label>Identifiant de la clinique</label>
            <input
              type="text"
              value={cliniqueId}
              onChange={(e) => setCliniqueId(e.target.value)}
              placeholder="Ex : 102"
              required
            />
          </div>

          <div className="rdv-group">
            <label>Spécialité souhaitée</label>
            <select
              value={specialiteId}
              onChange={(e) => setSpecialiteId(e.target.value)}
              required
            >
              <option value="">-- Sélectionner --</option>
              {specialites.map((s) => (
                <option key={s.id} value={s.id}>{s.nom}</option>
              ))}
            </select>
          </div>

          <div className="rdv-group">
            <label>Date et heure</label>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="rdv-group">
            <label>Motif de la consultation</label>
            <textarea
              value={motif}
              onChange={(e) => setMotif(e.target.value)}
              placeholder="Décrivez votre besoin..."
              required
            />
          </div>

          <button type="submit" className="rdv-button">Confirmer le rendez-vous</button>
        </form>

        {confirmation && (
          <div className="rdv-confirmation">
            <div className="rdv-checkmark">✔</div>
            <h2>Rendez-vous confirmé</h2>
            <p>{confirmation}</p>
            <span className="rdv-note">Un email de confirmation vous sera envoyé.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PriseRendezVous;
