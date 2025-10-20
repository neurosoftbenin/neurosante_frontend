FRONT-END CAHIER DE CHARGES

Axes front-end principaux

🔹 Axe 1 : Interface Clinique

Dashboard : résumé des rendez-vous, liste patients du jour, graphiques Recharts.

Rendez-vous : calendrier interactif (FullCalendar.js), création/modification des créneaux.

Structures : ajout, modification, suppression des services.

Statistiques : graphique d’occupation et activité par service.

Paramètres : profil clinique, horaires, personnel.

🔹 Axe 2 : Interface Patient

Accueil / Recherche : filtres par ville, spécialité, disponibilité. Cards cliniques.

Page clinique : détails, services, horaires, carte Google Maps.

Prise de rendez-vous : sélection date, heure, service, motif, confirmation.

Profil patient : historique rendez-vous, modification / annulation.

🔹 Axe 3 : Interface Administrateur (optionnelle)

Tableau global cliniques et patients.

Validation ou suppression de comptes.

Statistiques globales.

Supervision des retours utilisateurs.

🔹 Axe 4 : Composants et interactions

Composants réutilisables : Button, Card, Modal, CalendarView, StatsChart.

Gestion d’état : Context API pour auth et données globales.

Services API : Axios pour communication avec backend Python/Django.

Animations : Framer Motion pour transitions et modals.

Feedback utilisateur : confirmation des actions, erreurs, notifications.

🔹 Axe 5 : Design et expérience utilisateur

Palette : bleu pastel, vert menthe, blanc.

Typographie : Inter / Poppins / Nunito.

Responsive : menu burger sur mobile, affichage cartes verticales.

Sidebar fixe pour desktop, header supérieur pour profil et notifications.

UI épurée : cartes arrondies, boutons cohérents, transitions fluides.


STRUCTURES DE LA RACINE DU REPOT

neurosoft-rdv/                # Nom du projet
── public/                   # Fichiers statiques
   ── index.html            # Point d’entrée HTML
   ── favicon.ico           # Icône du site
   ── logo.png              # Logo de l’application

── src/                      # Code source React
   ── assets/               # Images, icônes
   ── components/           # Composants réutilisables (Navbar, Sidebar, Cards, Modals…)
   ── layouts/              # Layouts par rôle (Patient, Clinique, Admin)
   ── pages/                # Pages principales (Dashboard, Home, Booking, Profile…)
   ── routes/               # Gestion des routes
   ── hooks/                # Hooks personnalisés
   ── styles/               # CSS / Tailwind
   ── App.jsx               # Composant racine
   ── main.jsx (ou index.js) # Point d’entrée React

── package.json              # Dépendances et scripts
── package-lock.json         # (ou yarn.lock selon gestionnaire)
── tailwind.config.js        # Configuration Tailwind CSS
── postcss.config.js         # Configuration PostCSS
── README.md                 # Documentation du projet


LIEN LOGOS NEURO-SANTE : https://www.figma.com/make/5j0jWbZdSahZeRbauwzbKM/Greeting-Message?node-id=0-1&p=f&t=j6KHke8BuhdxKwZe-0&fullscreen=1