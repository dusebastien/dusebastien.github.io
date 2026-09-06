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
 text: "Ce projet porte sur la combustion d’un mélange hydrogène/air à l’aide de simulations numériques sous MATLAB. L’étude s’organise autour de quatre axes complémentaires : les propriétés thermodynamiques, les propriétés de transport, la cinétique chimique et la modélisation d’une flamme monodimensionnelle. L’objectif est d’analyser l’influence de la richesse, de la température et de la composition du mélange sur le comportement de la flamme.",
 highlights: [
   "Propriétés thermodynamiques : détermination de la température adiabatique de flamme et étude de son évolution en fonction de la richesse du mélange.",
   "Propriétés de transport : analyse de la conductivité thermique et des coefficients de diffusion en fonction de la température et de la composition du mélange.",
   "Cinétique chimique : étude de la structure de la flamme, des espèces radicalaires et des taux de production des espèces chimiques.",
   "Flamme monodimensionnelle : analyse de la température des gaz brûlés et du rendement de combustion, avec comparaison entre combustion dans l’air et dans l’oxygène pur."
 ],
 images: [
   {
     src: "assets/projets/combustion-thermodynamique.png",
     alt: "Température adiabatique de flamme en fonction de la richesse",
     caption: "Propriétés thermodynamiques — température adiabatique de flamme en fonction de la richesse."
   },
   {
     src: "assets/projets/combustion-transport.png",
     alt: "Iso-contours de conductivité thermique en fonction de la température et de la fraction molaire d’argon",
     caption: "Propriétés de transport — influence de la température et de la composition sur la conductivité thermique."
   },
   {
     src: "assets/projets/combustion-cinetique.png",
     alt: "Fractions molaires des radicaux dans une flamme hydrogène air",
     caption: "Cinétique chimique — évolution des espèces radicalaires dans la zone de flamme."
   },
   {
     src: "assets/projets/combustion-flamme-1d.png",
     alt: "Température des gaz brûlés et rendement de combustion en fonction de la richesse",
     caption: "Flamme monodimensionnelle — température des gaz brûlés et rendement de combustion."
   }
 ],
 skills: [
   "MATLAB",
   "Simulation numérique",
   "Combustion hydrogène/air",
   "Thermodynamique",
   "Propriétés de transport",
   "Cinétique chimique",
   "Modélisation 1D",
   "Analyse de données"
 ],
 galleryLayout: "uniform-grid"
 },
 thermo: {
 documentFolder: "Calcul Scientifique",
 title: "Modélisation numérique des propriétés thermodynamiques et des ondes de choc",
 meta: "Février 2026 · Master · Sorbonne Université",
 text: "Développement d’un programme en Fortran 2018 pour modéliser les propriétés thermodynamiques de plusieurs gaz à capacités calorifiques variables, puis application à l’étude des ondes de choc normales. Le travail porte à la fois sur la mise en place d’une bibliothèque numérique et sur l’analyse des grandeurs aérodynamiques et thermodynamiques en fonction du nombre de Mach.",
 highlights: [
   "Développement d’une structure de calcul modulaire pour les propriétés thermodynamiques de gaz à capacités calorifiques variables.",
   "Étude de l’influence du nombre de Mach amont sur les grandeurs aval à travers une onde de choc normale.",
   "Analyse de l’effet de la température amont sur l’évolution de M₂, p₂/p₁, ρ₂/ρ₁ et pₜ₂/pₜ₁.",
   "Comparaison entre plusieurs approches thermodynamiques : γ(T), γavg, γ₁, γ₂ et γ = 1,4.",
   "Mise en évidence des écarts entre modèle à γ constant et modèle à propriétés variables lorsque le Mach augmente."
 ],
 images: [
   {
     src: "assets/projets/thermo-m2-air.png",
     alt: "Mach aval M2 en fonction du Mach amont M1 pour différentes températures",
     caption: "Mach aval M₂ en fonction du Mach amont M₁."
   },
   {
     src: "assets/projets/thermo-p2-p1-temperatures.png",
     alt: "Rapport de pression statique p2 sur p1 en fonction du Mach amont pour différentes températures",
     caption: "Rapport p₂/p₁ en fonction de M₁ pour différentes températures amont."
   },
   {
     src: "assets/projets/thermo-p2-p1-gamma.png",
     alt: "Rapport de pression p2 sur p1 pour différents modèles thermodynamiques",
     caption: "Rapport p₂/p₁ : comparaison des différents modèles de γ."
   },
   {
     src: "assets/projets/thermo-pt2-pt1.png",
     alt: "Rapport de pression totale pt2 sur pt1 en fonction du Mach amont",
     caption: "Rapport de pression totale pₜ₂/pₜ₁ en fonction de M₁."
   },
   {
     src: "assets/projets/thermo-rho2-rho1-temperatures.png",
     alt: "Rapport de masse volumique rho2 sur rho1 en fonction du Mach amont pour différentes températures",
     caption: "Rapport ρ₂/ρ₁ en fonction de M₁ pour différentes températures amont."
   },
   {
     src: "assets/projets/thermo-rho2-rho1-gamma.png",
     alt: "Rapport de masse volumique rho2 sur rho1 pour différents modèles thermodynamiques",
     caption: "Rapport ρ₂/ρ₁ : comparaison des différents modèles de γ."
   },
   {
     src: "assets/projets/thermo-t2-t1-gamma.png",
     alt: "Rapport de température T2 sur T1 pour différents modèles thermodynamiques",
     caption: "Rapport T₂/T₁ : comparaison des différents modèles de γ."
   }
 ],
 skills: [
   "Fortran 2018",
   "Thermodynamique",
   "Aérodynamique compressible",
   "Ondes de choc",
   "Calcul scientifique",
   "Méthodes numériques",
   "Modélisation physique",
   "Analyse de données"
 ],
 gallerySections: [
   {
     layout: "grid-2",
     featuredFirst: false,
     images: [
       {
         src: "assets/projets/thermo-m2-air.png",
         alt: "Mach aval M2 en fonction du Mach amont M1 pour différentes températures",
         caption: "Mach aval M₂ en fonction du Mach amont M₁."
       },
       {
         src: "assets/projets/thermo-p2-p1-temperatures.png",
         alt: "Rapport de pression statique p2 sur p1 en fonction du Mach amont pour différentes températures",
         caption: "Rapport p₂/p₁ en fonction de M₁ pour différentes températures amont."
       },
       {
         src: "assets/projets/thermo-pt2-pt1.png",
         alt: "Rapport de pression totale pt2 sur pt1 en fonction du Mach amont",
         caption: "Rapport de pression totale pₜ₂/pₜ₁ en fonction de M₁."
       },
       {
         src: "assets/projets/thermo-rho2-rho1-temperatures.png",
         alt: "Rapport de masse volumique rho2 sur rho1 en fonction du Mach amont pour différentes températures",
         caption: "Rapport ρ₂/ρ₁ en fonction de M₁ pour différentes températures amont."
       }
     ]
   },
   {
     layout: "grid-3",
     featuredFirst: false,
     images: [
       {
         src: "assets/projets/thermo-p2-p1-gamma.png",
         alt: "Rapport de pression p2 sur p1 pour différents modèles thermodynamiques",
         caption: "Rapport p₂/p₁ : comparaison des différents modèles de γ."
       },
       {
         src: "assets/projets/thermo-rho2-rho1-gamma.png",
         alt: "Rapport de masse volumique rho2 sur rho1 pour différents modèles thermodynamiques",
         caption: "Rapport ρ₂/ρ₁ : comparaison des différents modèles de γ."
       },
       {
         src: "assets/projets/thermo-t2-t1-gamma.png",
         alt: "Rapport de température T2 sur T1 pour différents modèles thermodynamiques",
         caption: "Rapport T₂/T₁ : comparaison des différents modèles de γ."
       }
     ]
   }
 ]
 },
 phase: {
 documentFolder: "Méthodes numériques pour la dynamique",
 title: "Diffusion thermique 2D avec changement de phase",
 meta: "Décembre 2025 · Master · Sorbonne Université",
 text: "Simulation numérique en Python de la solidification bidimensionnelle d’un milieu initialement liquide à l’aide d’une approche à front diffus. Le changement de phase est intégré dans une formulation enthalpique prenant en compte la chaleur latente, ce qui permet de résoudre une seule équation sur l’ensemble du domaine sans suivre explicitement l’interface solide-liquide.",
 highlights: [
   "Modélisation 2D du changement de phase avec suivi de l’évolution de la fraction solide dans le temps.",
   "Formulation enthalpique à front diffus permettant d’intégrer la chaleur latente dans les propriétés thermiques effectives.",
   "Discrétisation par différences finies, schéma implicite en temps et résolution de systèmes linéaires creux.",
   "Analyse de la cinétique de solidification à partir de la fraction solide moyenne et du temps caractéristique de diffusion thermique.",
   "Étude de l’influence des températures imposées, de la température initiale et de la chaleur latente sur la durée de solidification."
 ],
 videos: [
   {
     src: "assets/projets/solidification.mp4",
     caption: "Évolution temporelle de la solidification 2D — progression du front depuis les parois froides vers le centre."
   }
 ],
 images: [
   {
     src: "assets/projets/solidification-initial.png",
     alt: "État initial du domaine avant solidification",
     caption: "État initial — domaine entièrement liquide au début de la simulation."
   },
   {
     src: "assets/projets/solidification-intermediaire.png",
     alt: "État intermédiaire de la solidification bidimensionnelle",
     caption: "État intermédiaire — progression du front de solidification depuis les quatre parois."
   },
   {
     src: "assets/projets/solidification-final.png",
     alt: "État final du domaine après solidification",
     caption: "État final — domaine quasiment entièrement solidifié."
   }
 ],
 skills: [
   "Python",
   "NumPy",
   "SciPy",
   "Matplotlib",
   "Différences finies",
   "Schéma implicite",
   "Matrices creuses",
   "Transferts thermiques",
   "Changement de phase",
   "Modélisation numérique"
 ],
 gallerySections: [
   {
     layout: "single",
     featuredFirst: false,
     videos: [
       {
         src: "assets/projets/solidification.mp4",
         caption: "Évolution temporelle de la solidification 2D — progression du front depuis les parois froides vers le centre."
       }
     ]
   },
   {
     layout: "grid-3",
     featuredFirst: false,
     images: [
       {
         src: "assets/projets/solidification-initial.png",
         alt: "État initial du domaine avant solidification",
         caption: "État initial — domaine entièrement liquide au début de la simulation."
       },
       {
         src: "assets/projets/solidification-intermediaire.png",
         alt: "État intermédiaire de la solidification bidimensionnelle",
         caption: "État intermédiaire — progression du front de solidification depuis les quatre parois."
       },
       {
         src: "assets/projets/solidification-final.png",
         alt: "État final du domaine après solidification",
         caption: "État final — domaine quasiment entièrement solidifié."
       }
     ]
   }
 ]
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
  modalGallery?.classList.remove("project-modal-gallery-uniform");

  function createGalleryFigure(media, type, isFeatured) {
    const figure = document.createElement("figure");
    figure.className = isFeatured
      ? "project-gallery-item project-gallery-item-featured"
      : "project-gallery-item";

    if (type === "video") {
      const player = document.createElement("video");
      player.src = media.src;
      player.controls = true;
      player.preload = "metadata";
      player.playsInline = true;
      figure.appendChild(player);
    } else {
      const img = document.createElement("img");
      img.src = media.src;
      img.alt = media.alt || "";
      img.loading = "lazy";
      figure.appendChild(img);
    }

    const caption = document.createElement("figcaption");
    caption.textContent = media.caption || "";
    figure.appendChild(caption);

    return figure;
  }

  function getSectionLayoutClass(layout) {
    switch (layout) {
      case "grid-2":
        return "project-gallery-section layout-grid-2";
      case "grid-3":
        return "project-gallery-section layout-grid-3";
      case "single":
        return "project-gallery-section layout-single";
      default:
        return "project-gallery-section layout-default";
    }
  }

  const gallerySections =
    Array.isArray(project.gallerySections) && project.gallerySections.length
      ? project.gallerySections
      : [
          {
            layout:
              project.galleryLayout === "uniform-grid" ? "grid-2" : "default",
            featuredFirst: project.galleryLayout !== "uniform-grid",
            videos: Array.isArray(project.videos) ? project.videos : [],
            images: Array.isArray(project.images) ? project.images : []
          }
        ];

  let mediaCount = 0;

  gallerySections.forEach(section => {
    const sectionElement = document.createElement("div");
    sectionElement.className = getSectionLayoutClass(section.layout);

    const sectionVideos = Array.isArray(section.videos) ? section.videos : [];
    const sectionImages = Array.isArray(section.images) ? section.images : [];

    let sectionIndex = 0;

    sectionVideos.forEach(video => {
      const isFeatured = !!section.featuredFirst && sectionIndex === 0;
      sectionElement.appendChild(createGalleryFigure(video, "video", isFeatured));
      sectionIndex += 1;
      mediaCount += 1;
    });

    sectionImages.forEach(image => {
      const isFeatured = !!section.featuredFirst && sectionIndex === 0;
      sectionElement.appendChild(createGalleryFigure(image, "image", isFeatured));
      sectionIndex += 1;
      mediaCount += 1;
    });

    if (sectionIndex > 0) {
      modalGallery.appendChild(sectionElement);
    }
  });

  modalGallery.hidden = mediaCount === 0;

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
  modalGallery?.querySelectorAll("video").forEach(video => {
    video.pause();
  });
  modalGallery?.classList.remove("project-modal-gallery-uniform");
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
