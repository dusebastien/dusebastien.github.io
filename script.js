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
 combustion: {
 documentFolder: "Combustion",
 title: "Simulation numérique d’une flamme hydrogène/air",
 meta: "Avril 2026 · Master · Sorbonne Université",
 text: "Étude numérique sous MATLAB de la combustion d’un mélange hydrogène/air. Le projet combine une approche thermodynamique, l’analyse des propriétés de transport, la cinétique chimique et une modélisation de flamme monodimensionnelle afin de caractériser le comportement d’une flamme prémélangée.",
 highlights: [
   "Calcul de la température adiabatique de flamme et étude de son évolution avec la richesse du mélange.",
   "Analyse de la conductivité thermique et des coefficients de diffusion en fonction de la température et de la composition.",
   "Étude des espèces radicalaires H, O, OH et HO₂ ainsi que du taux de production de H₂O au niveau du front de flamme.",
   "Comparaison d’une flamme H₂/air et d’une combustion avec oxygène pur à l’aide d’un modèle monodimensionnel."
 ],
 images: [
   {
     src: "assets/projets/combustion-temperature.png",
     alt: "Évolution de la température adiabatique de flamme en fonction de la richesse",
     caption: "Température adiabatique en fonction de la richesse du mélange."
   },
   {
     src: "assets/projets/combustion-cinetique.png",
     alt: "Profils des espèces chimiques et radicalaires dans une flamme hydrogène air",
     caption: "Structure de la zone de réaction et profils des espèces radicalaires."
   },
   {
     src: "assets/projets/combustion-flamme-1d.png",
     alt: "Température des gaz brûlés et rendement de combustion en fonction de la richesse",
     caption: "Modélisation 1D : température des gaz brûlés et rendement de combustion."
   }
 ],
 skills: ["MATLAB", "Combustion", "Thermodynamique", "Cinétique chimique", "Transport", "Flamme 1D", "Hydrogène"]
 },
 thermo: {
 documentFolder: "Calcul Scientifique",
 title: "Modélisation numérique des propriétés thermodynamiques et des ondes de choc",
 text: "Développement d’un programme modulaire pour modéliser les propriétés thermodynamiques de gaz à capacités calorifiques variables et simuler des ondes de choc normales. Le projet mobilise notamment la méthode de Newton pour calculer température, pression et masse volumique.",
 skills: ["Thermodynamique", "Ondes de choc", "Méthode de Newton", "Simulation numérique"]
 },
 phase: {
 documentFolder: "Méthodes numériques pour la dynamique",
 title: "Simulation numérique de l’équation de diffusion thermique 2D avec changement de phase",
 text: "Modélisation de la solidification avec front diffus en 2D à l’aide d’une formulation enthalpique. Implémentation en Python pour étudier la diffusion thermique et l’évolution du front de phase.",
 skills: ["Python", "Différences finies", "Discrétisation", "Thermique"]
 },
 waves: {
 documentFolder: "Vagues infinies 2D",
 title: "Simulation de vagues infinies en 2D",
 text: "Simulation de la propagation d’ondes dans un domaine bidimensionnel représentant une étendue d’eau. L’équation des ondes est résolue numériquement par différences finies avec des conditions aux limites périodiques afin de simuler une propagation continue en pleine mer.",
 skills: ["Python", "Équation des ondes", "Différences finies", "Conditions périodiques"]
 },
 naca: {
 documentFolder: "NACA Fluides L3",
 title: "Écoulement autour d’un profil NACA0012 et comparaison aux mesures expérimentales",
 text: "Étude de validation CFD sur un profil NACA0012 à Mach 0,82. Post-traitement sous ParaView, comparaison des coefficients de pression et de traînée avec les données expérimentales, et analyse de l’apparition des ondes de choc et des zones de séparation.",
 skills: ["CFD", "ParaView", "Aérodynamique", "Validation expérimentale"]
 },
 bemt: {
 documentFolder: "Eoliennes",
 title: "Analyse BEMT d’éoliennes HAWT",
 text: "Étude comparative et optimisation des performances aérodynamiques de trois éoliennes HAWT par la théorie BEMT. Analyse des courbes de puissance, confrontation aux données expérimentales et étude paramétrique de géométries optimisées.",
 skills: ["BEMT", "Aérodynamique", "Optimisation", "Analyse de données"]
 },
 robot: {
 documentFolder: "Robot Humanoide",
 title: "Robot humanoïde marcheur",
 text: "Conception assistée par ordinateur d’un humanoïde marcheur, suivie de simulations de mouvement pour valider une démarche équilibrée et une mobilité fonctionnelle.",
 skills: ["SolidWorks", "CAO", "Simulation mécanique"]
 },
 pacman: {
 documentFolder: "Pacman",
 title: "Pacman en Fortran",
 text: "Développement en équipe d’une version du jeu Pac-Man codée en Fortran, avec navigation dans un labyrinthe, gestion des fantômes et collecte de points.",
 skills: ["Fortran", "Algorithmique", "Programmation scientifique"]
 },
};


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSkills = document.getElementById("modalSkills");
const modalProjectMeta = document.getElementById("modalProjectMeta");
const modalGallery = document.getElementById("modalGallery");
const modalHighlights = document.getElementById("modalHighlights");
const modalHighlightsList = document.getElementById("modalHighlightsList");
const privateAccessForm = document.getElementById("privateAccessForm");
const privatePassword = document.getElementById("privatePassword");
const privateAccessMessage = document.getElementById("privateAccessMessage");
const privateLockedPanel = document.getElementById("privateLockedPanel");
const privateUnlockedPanel = document.getElementById("privateUnlockedPanel");
const privateLoginButton = document.getElementById("privateLoginButton");
const privateLogoutButton = document.getElementById("privateLogoutButton");
const privateDocumentsList = document.getElementById("privateDocumentsList");
const privateEmptyMessage = document.getElementById("privateEmptyMessage");
const privatePdfViewer = document.getElementById("privatePdfViewer");
const privatePdfFrame = document.getElementById("privatePdfFrame");
const privatePdfTitle = document.getElementById("privatePdfTitle");
const privatePdfCloseButton = document.getElementById("privatePdfCloseButton");
const privatePdfOpenButton = document.getElementById("privatePdfOpenButton");

const DOCUMENTS_API = "https://portfolio-documents-api.seblasteu.workers.dev";
const DOCUMENTS_TOKEN_KEY = "sebastien-portfolio-docs-token";

let currentProject = null;
let currentPdfObjectUrl = null;
let documentsCache = null;


function openModal(project) {
  modalTitle.textContent = project.title;
  modalText.textContent = project.text;
  modalSkills.replaceChildren();

  project.skills.forEach(skill => {
    const chip = document.createElement("span");
    chip.textContent = skill;
    modalSkills.appendChild(chip);
  });

  if (project.meta) {
    modalProjectMeta.textContent = project.meta;
    modalProjectMeta.hidden = false;
  } else {
    modalProjectMeta.textContent = "";
    modalProjectMeta.hidden = true;
  }

  modalGallery.replaceChildren();

  if (Array.isArray(project.images) && project.images.length) {
    project.images.forEach((image, index) => {
      const figure = document.createElement("figure");
      figure.className =
        index === 0
          ? "project-gallery-item project-gallery-item-featured"
          : "project-gallery-item";

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt || "";
      img.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.textContent = image.caption || "";

      figure.append(img, caption);
      modalGallery.appendChild(figure);
    });

    modalGallery.hidden = false;
  } else {
    modalGallery.hidden = true;
  }

  modalHighlightsList.replaceChildren();

  if (Array.isArray(project.highlights) && project.highlights.length) {
    project.highlights.forEach(highlight => {
      const item = document.createElement("li");
      item.textContent = highlight;
      modalHighlightsList.appendChild(item);
    });

    modalHighlights.hidden = false;
  } else {
    modalHighlights.hidden = true;
  }

  currentProject = project;
  closePdfViewer();

  if (privatePassword) {
    privatePassword.value = "";
  }

  refreshPrivateAccessForProject();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close")?.focus();
}


function closeModal() {
  closePdfViewer();
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
// ACCÈS RECRUTEUR — CLOUDFLARE WORKER + R2
// =========================================================

function getDocumentsToken() {
  try {
    return sessionStorage.getItem(DOCUMENTS_TOKEN_KEY) || "";
  } catch (error) {
    return "";
  }
}

function setDocumentsToken(token) {
  try {
    if (token) {
      sessionStorage.setItem(DOCUMENTS_TOKEN_KEY, token);
    } else {
      sessionStorage.removeItem(DOCUMENTS_TOKEN_KEY);
    }
  } catch (error) {}
}

function setAccessMessage(message, type = "") {
  if (!privateAccessMessage) return;

  privateAccessMessage.textContent = message;
  privateAccessMessage.classList.remove("is-warning", "is-success");

  if (type) {
    privateAccessMessage.classList.add(type);
  }
}

function setPrivateLoading(loading) {
  if (!privateLoginButton || !privatePassword) return;

  privateLoginButton.disabled = loading;
  privatePassword.disabled = loading;
  privateLoginButton.textContent = loading ? "Connexion…" : "Déverrouiller";
}

async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const token = getDocumentsToken();

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(`${DOCUMENTS_API}${path}`, {
    ...options,
    headers,
  });
}

async function validateSession() {
  const token = getDocumentsToken();

  if (!token) return false;

  try {
    const response = await apiRequest("/api/session", {
      method: "GET",
    });

    if (!response.ok) {
      setDocumentsToken("");
      documentsCache = null;
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

function showLockedPanel() {
  if (privateLockedPanel) privateLockedPanel.hidden = false;
  if (privateUnlockedPanel) privateUnlockedPanel.hidden = true;

  closePdfViewer();
}

function showUnlockedPanel() {
  if (privateLockedPanel) privateLockedPanel.hidden = true;
  if (privateUnlockedPanel) privateUnlockedPanel.hidden = false;
}

async function refreshPrivateAccessForProject() {
  if (!privateLockedPanel || !privateUnlockedPanel) return;

  if (!getDocumentsToken()) {
    showLockedPanel();
    setAccessMessage(
      "Une seule connexion donne accès aux documents pendant 2 heures."
    );
    return;
  }

  const valid = await validateSession();

  if (!valid) {
    showLockedPanel();
    setAccessMessage(
      "La session a expiré. Saisis de nouveau le mot de passe.",
      "is-warning"
    );
    return;
  }

  showUnlockedPanel();
  await renderProjectDocuments();
}

async function loadDocuments() {
  if (documentsCache) {
    return documentsCache;
  }

  const response = await apiRequest("/api/documents", {
    method: "GET",
  });

  if (response.status === 401) {
    setDocumentsToken("");
    throw new Error("SESSION_EXPIRED");
  }

  if (!response.ok) {
    throw new Error("DOCUMENT_LIST_ERROR");
  }

  const data = await response.json();

  documentsCache = Array.isArray(data.documents)
    ? data.documents.filter(document => document.key && !document.key.endsWith("/"))
    : [];

  return documentsCache;
}

function prettifyFileName(key) {
  const fileName = key.split("/").pop() || key;

  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function getFileExtension(key) {
  const match = key.match(/\.([^.]+)$/);
  return match ? match[1].toUpperCase() : "FICHIER";
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";

  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} Ko`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} Mo`;
}

async function renderProjectDocuments() {
  if (!privateDocumentsList || !privateEmptyMessage || !currentProject) {
    return;
  }

  privateDocumentsList.replaceChildren();
  privateEmptyMessage.hidden = true;

  const loading = document.createElement("p");
  loading.className = "private-documents-loading";
  loading.textContent = "Chargement des documents…";
  privateDocumentsList.appendChild(loading);

  try {
    const documents = await loadDocuments();
    const folder = currentProject.documentFolder;

    const projectDocuments = folder
      ? documents.filter(document => document.key.startsWith(`${folder}/`))
      : [];

    privateDocumentsList.replaceChildren();

    if (!projectDocuments.length) {
      privateEmptyMessage.hidden = false;
      return;
    }

    projectDocuments.forEach(file => {
      const button = document.createElement("button");
      button.className = "private-document-card";
      button.type = "button";

      const icon = document.createElement("span");
      icon.className = "private-document-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = getFileExtension(file.key);

      const info = document.createElement("span");
      info.className = "private-document-info";

      const title = document.createElement("strong");
      title.textContent = prettifyFileName(file.key);

      const meta = document.createElement("span");
      const size = formatFileSize(file.size);
      meta.textContent = size
        ? `${getFileExtension(file.key)} · ${size}`
        : getFileExtension(file.key);

      info.append(title, meta);

      const arrow = document.createElement("span");
      arrow.className = "private-document-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";

      button.append(icon, info, arrow);

      button.addEventListener("click", () => {
        openPrivateDocument(file);
      });

      privateDocumentsList.appendChild(button);
    });
  } catch (error) {
    privateDocumentsList.replaceChildren();

    if (error.message === "SESSION_EXPIRED") {
      showLockedPanel();
      setAccessMessage(
        "La session a expiré. Saisis de nouveau le mot de passe.",
        "is-warning"
      );
      return;
    }

    const message = document.createElement("p");
    message.className = "private-empty-message";
    message.textContent =
      "Impossible de charger les documents pour le moment.";
    privateDocumentsList.appendChild(message);
  }
}

async function openPrivateDocument(document) {
  if (!privatePdfViewer || !privatePdfFrame || !privatePdfTitle) return;

  closePdfViewer(false);

  privatePdfViewer.hidden = false;
  privatePdfTitle.textContent = "Chargement du document…";
  privatePdfFrame.removeAttribute("src");

  try {
    const response = await apiRequest(
      `/api/file/${encodeURIComponent(document.key)}`,
      { method: "GET" }
    );

    if (response.status === 401) {
      setDocumentsToken("");
      documentsCache = null;
      showLockedPanel();
      setAccessMessage(
        "La session a expiré. Saisis de nouveau le mot de passe.",
        "is-warning"
      );
      return;
    }

    if (!response.ok) {
      throw new Error("FILE_ERROR");
    }

    const blob = await response.blob();
    currentPdfObjectUrl = URL.createObjectURL(blob);

    privatePdfTitle.textContent = prettifyFileName(document.key);
    privatePdfFrame.src = currentPdfObjectUrl;

    privatePdfViewer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } catch (error) {
    privatePdfTitle.textContent = "Document indisponible";
    privatePdfFrame.removeAttribute("src");
  }
}

function closePdfViewer(hide = true) {
  if (currentPdfObjectUrl) {
    URL.revokeObjectURL(currentPdfObjectUrl);
    currentPdfObjectUrl = null;
  }

  if (privatePdfFrame) {
    privatePdfFrame.removeAttribute("src");
  }

  if (privatePdfViewer && hide) {
    privatePdfViewer.hidden = true;
  }
}

privateAccessForm?.addEventListener("submit", async event => {
  event.preventDefault();

  const password = privatePassword?.value || "";

  if (!password.trim()) {
    setAccessMessage("Saisis le mot de passe recruteur.", "is-warning");
    privatePassword?.focus();
    return;
  }

  setPrivateLoading(true);
  setAccessMessage("Vérification du mot de passe…");

  try {
    const response = await fetch(`${DOCUMENTS_API}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.token) {
      setAccessMessage(
        data.message || "Mot de passe incorrect.",
        "is-warning"
      );
      privatePassword?.select();
      return;
    }

    setDocumentsToken(data.token);
    documentsCache = null;

    if (privatePassword) {
      privatePassword.value = "";
    }

    showUnlockedPanel();
    await renderProjectDocuments();
  } catch (error) {
    setAccessMessage(
      "Impossible de joindre l’espace sécurisé. Réessaie dans un instant.",
      "is-warning"
    );
  } finally {
    setPrivateLoading(false);
  }
});

privateLogoutButton?.addEventListener("click", () => {
  setDocumentsToken("");
  documentsCache = null;
  showLockedPanel();

  setAccessMessage(
    "Session fermée. Saisis le mot de passe pour accéder aux documents."
  );
});

privatePdfCloseButton?.addEventListener("click", () => {
  closePdfViewer();
});

privatePdfOpenButton?.addEventListener("click", () => {
  if (currentPdfObjectUrl) {
    window.open(currentPdfObjectUrl, "_blank", "noopener,noreferrer");
  }
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
