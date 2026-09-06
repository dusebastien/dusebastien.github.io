const root = document.documentElement;
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");


menuToggle?.addEventListener("click", () => {
 const isOpen = navLinks.classList.toggle("is-open");
 menuToggle.setAttribute("aria-expanded", String(isOpen));
});


document.querySelectorAll(".nav-links a").forEach(link => {
 link.addEventListener("click", () => {
 navLinks.classList.remove("is-open");
 menuToggle?.setAttribute("aria-expanded", "false");
 });
});


const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


function updateThemeButton() {
 if (!themeToggle) return;
 const dark = root.dataset.theme === "dark";
 themeToggle.setAttribute(
 "aria-label",
 dark ? "Activer le mode clair" : "Activer le mode sombre"
 );
 themeToggle.setAttribute(
 "title",
 dark ? "Passer en mode clair" : "Passer en mode sombre"
 );
}


themeToggle?.addEventListener("click", () => {
 const next = root.dataset.theme === "dark" ? "light" : "dark";
 root.dataset.theme = next;
 try {
 localStorage.setItem("sebastien-portfolio-theme", next);
 } catch (e) {}
 updateThemeButton();
});


updateThemeButton();


const projectData = {
 thermo: {
 title: "Modélisation numérique des propriétés thermodynamiques et des ondes de choc",
 text: "Développement d’un programme modulaire pour modéliser les propriétés thermodynamiques de gaz à capacités calorifiques variables et simuler des ondes de choc normales. Le projet mobilise notamment la méthode de Newton pour calculer température, pression et masse volumique.",
 skills: ["Thermodynamique", "Ondes de choc", "Méthode de Newton", "Simulation numérique"]
 },
 phase: {
 title: "Simulation numérique de l’équation de diffusion thermique 2D avec changement de phase",
 text: "Modélisation de la solidification avec front diffus en 2D à l’aide d’une formulation enthalpique. Implémentation en Python pour étudier la diffusion thermique et l’évolution du front de phase.",
 skills: ["Python", "Différences finies", "Discrétisation", "Thermique"]
 },
 waves: {
 title: "Simulation de vagues infinies en 2D",
 text: "Simulation de la propagation d’ondes dans un domaine bidimensionnel représentant une étendue d’eau. L’équation des ondes est résolue numériquement par différences finies avec des conditions aux limites périodiques afin de simuler une propagation continue en pleine mer.",
 skills: ["Python", "Équation des ondes", "Différences finies", "Conditions périodiques"]
 },
 naca: {
 title: "Écoulement autour d’un profil NACA0012 et comparaison aux mesures expérimentales",
 text: "Étude de validation CFD sur un profil NACA0012 à Mach 0,82. Post-traitement sous ParaView, comparaison des coefficients de pression et de traînée avec les données expérimentales, et analyse de l’apparition des ondes de choc et des zones de séparation.",
 skills: ["CFD", "ParaView", "Aérodynamique", "Validation expérimentale"]
 },
 bemt: {
 title: "Analyse BEMT d’éoliennes HAWT",
 text: "Étude comparative et optimisation des performances aérodynamiques de trois éoliennes HAWT par la théorie BEMT. Analyse des courbes de puissance, confrontation aux données expérimentales et étude paramétrique de géométries optimisées.",
 skills: ["BEMT", "Aérodynamique", "Optimisation", "Analyse de données"]
 },
 robot: {
 title: "Robot humanoïde marcheur",
 text: "Conception assistée par ordinateur d’un humanoïde marcheur, suivie de simulations de mouvement pour valider une démarche équilibrée et une mobilité fonctionnelle.",
 skills: ["SolidWorks", "CAO", "Simulation mécanique"]
 },
 pacman: {
 title: "Pacman en Fortran",
 text: "Développement en équipe d’une version du jeu Pac-Man codée en Fortran, avec navigation dans un labyrinthe, gestion des fantômes et collecte de points.",
 skills: ["Fortran", "Algorithmique", "Programmation scientifique"]
 },
 fall: {
 title: "Projet numérique — Chute libre",
 text: "Simulation en Python de la chute libre de Felix Baumgartner en combinant mécanique et informatique. La trajectoire est modélisée à partir d’équations mécaniques avec prise en compte de la résistance de l’air et de la masse.",
 skills: ["Python", "Mécanique", "Modélisation", "Spyder"]
 },
 converter: {
 title: "Convertisseur universel",
 text: "Conception d’une interface Python avec Tkinter permettant de convertir distances, durées, masses, puissances, températures et volumes dans les unités souhaitées.",
 skills: ["Python", "Tkinter", "PyCharm", "Interface graphique"]
 }
};


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSkills = document.getElementById("modalSkills");


function openModal(project) {
 modalTitle.textContent = project.title;
 modalText.textContent = project.text;
 modalSkills.replaceChildren();


 project.skills.forEach(skill => {
 const chip = document.createElement("span");
 chip.textContent = skill;
 modalSkills.appendChild(chip);
 });


 modal.classList.add("is-open");
 modal.setAttribute("aria-hidden", "false");
 document.body.style.overflow = "hidden";
 document.querySelector(".modal-close")?.focus();
}


function closeModal() {
 modal.classList.remove("is-open");
 modal.setAttribute("aria-hidden", "true");
 document.body.style.overflow = "";
}


document.querySelectorAll("[data-project]").forEach(button => {
 button.addEventListener("click", () => {
 const project = projectData[button.dataset.project];
 if (project) openModal(project);
 });
});


document.querySelectorAll("[data-close-modal]").forEach(element => {
 element.addEventListener("click", closeModal);
});




// =========================================================
// EXPÉRIENCE — STAGE M1 CNRS / FAST
// =========================================================

const experienceData = {
  cnrs: {
    title: "Stage M1 — CNRS / Laboratoire FAST",
    text:
      "Stage de recherche réalisé de juin à août 2026 au laboratoire FAST " +
      "(Fluides, Automatique et Systèmes Thermiques) à Orsay. " +
      "Le travail portait sur l’étude numérique, d’abord en deux dimensions " +
      "puis en trois dimensions, d’un film liquide tombant sur un substrat corrugué. " +
      "Ce stage m’a permis de travailler sur la simulation numérique appliquée " +
      "à la mécanique des fluides et sur l’analyse de résultats de simulation.",
    skills: [
      "Simulation numérique",
      "Mécanique des fluides",
      "Modélisation 2D",
      "Modélisation 3D",
      "Analyse de résultats",
      "Recherche scientifique"
    ]
  }
};

const experienceModal = document.getElementById("experienceModal");
const experienceModalTitle = document.getElementById("experienceModalTitle");
const experienceModalText = document.getElementById("experienceModalText");
const experienceModalSkills = document.getElementById("experienceModalSkills");

function openExperienceModal(experience) {
  if (
    !experienceModal ||
    !experienceModalTitle ||
    !experienceModalText ||
    !experienceModalSkills
  ) {
    return;
  }

  experienceModalTitle.textContent = experience.title;
  experienceModalText.textContent = experience.text;
  experienceModalSkills.replaceChildren();

  experience.skills.forEach(skill => {
    const chip = document.createElement("span");
    chip.textContent = skill;
    experienceModalSkills.appendChild(chip);
  });

  experienceModal.classList.add("is-open");
  experienceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  experienceModal.querySelector(".modal-close")?.focus();
}

function closeExperienceModal() {
  if (!experienceModal) return;

  experienceModal.classList.remove("is-open");
  experienceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* Bouton "En savoir plus" */
document.querySelectorAll("[data-experience]").forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();

    const experience = experienceData[button.dataset.experience];

    if (experience) {
      openExperienceModal(experience);
    }
  });
});

/* Toute la carte du stage CNRS est cliquable */
document.querySelectorAll("[data-experience-card]").forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.closest("a, button")) {
      return;
    }

    const experience = experienceData[card.dataset.experienceCard];

    if (experience) {
      openExperienceModal(experience);
    }
  });
});

/* Fermeture de la modale expérience */
document.querySelectorAll("[data-close-experience]").forEach(element => {
  element.addEventListener("click", closeExperienceModal);
});


// Fermeture au clavier pour les deux modales
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  if (modal?.classList.contains("is-open")) {
    closeModal();
  }

  if (experienceModal?.classList.contains("is-open")) {
    closeExperienceModal();
  }
});
