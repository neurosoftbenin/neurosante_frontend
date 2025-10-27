import React, { useState } from 'react';
import '../styles/Formulaire.css';

function Formulaire() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [numero, setNumero] = useState('');
  const [mail, setMail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(`Rendez-vous enregistré pour ${prenom} ${nom}, ${age} ans. 📞 ${numero} ✉️ ${mail}`);
  };

  return (
    <>
      <header className="header-neurosante">
        <h1> Neuro-Santé</h1>
        <p>Plateforme de rendez-vous médicaux spécialisée</p>
      </header>

      <div className="formulaire-container">
        <h2>🧬 ENREGISTREMENT PATIENT</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nom">
              <svg className="icon" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
              Nom :
            </label>
            <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="prenom">
              <svg className="icon" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
              Prénom :
            </label>
            <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="age">
              <svg className="icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              Âge :
            </label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="numero">
              <svg className="icon" viewBox="0 0 24 24"><path d="M6.6 10.8c1.1 2.2 2.9 4 5.1 5.1l1.7-1.7c.2-.2.5-.3.8-.2 1 .3 2 .5 3.1.5.4 0 .7.3.7.7v3.1c0 .4-.3.7-.7.7C9.4 19.9 4.1 14.6 4.1 8.7c0-.4.3-.7.7-.7h3.1c.4 0 .7.3.7.7 0 1.1.2 2.1.5 3.1.1.3 0 .6-.2.8l-1.7 1.7z"/></svg>
              Téléphone :
            </label>
            <input type="tel" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="mail">
              <svg className="icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email :
            </label>
            <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
          </div>

          <div className="input-group">
            <label htmlFor="motDePasse">
              <svg className="icon" viewBox="0 0 24 24"><path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-7V7a6 6 0 00-12 0v3H4v10h16V10h-2zm-8-3a4 4 0 018 0v3H10V7z"/></svg>
              Mot de passe :
            </label>
            <input
              type="password"
              id="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              placeholder="*******"
              required
            />
          </div>

          <button type="submit">Valider</button>
        </form>

        {confirmation && <div className="confirmation">{confirmation}</div>}
      </div>
    </>
  );
}

export default Formulaire;
