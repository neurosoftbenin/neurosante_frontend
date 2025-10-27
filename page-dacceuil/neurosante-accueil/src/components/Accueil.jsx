import React from 'react';
import '../styles/Accueil.css';

function Accueil() {
  return (
    <div className="accueil-wrapper">
      <header className="header-neurosante">
        <div className="branding">
          <h1> Neuro-Santé</h1>
          <p>Plateforme médicale intelligente pour cliniques et patients</p>
        </div>
      </header>

      <main className="presentation">
        <section className="intro">
          <h2>Bienvenue sur Neuro-Santé</h2>
          <p>
            Neuro-Santé est une solution digitale conçue pour moderniser la gestion des soins médicaux.
            Elle permet aux cliniques de gérer efficacement leurs rendez-vous, d’enregistrer les patients
            en toute sécurité, et de centraliser les informations médicales dans un environnement fiable
            et confidentiel. Les patients bénéficient d’un accès simplifié à leurs données et à leurs
            professionnels de santé.
          </p>
        </section>

        <section className="actions">
          <h3>Accéder à votre espace</h3>
          <div className="buttons">
            <button onClick={() => window.location.href = '/connexion-patient'}>Espace Patient</button>
            <button onClick={() => window.location.href = '/connexion-clinique'}>Espace Clinique</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Neuro-Santé. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Accueil;
