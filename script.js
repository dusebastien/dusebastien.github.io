const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

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

document.getElementById("year").textContent = new Date().getFullYear();

const projectData = {
  robot: {
    title: "Humanoid Walking Robot",
    text: "Ajoute ici une description plus détaillée : contexte du projet, objectif, ton rôle personnel, difficultés rencontrées, outils utilisés et résultat obtenu."
  },
  pacman: {
    title: "Project Pacman",
    text: "Présente ici la logique du projet, les technologies utilisées, ce que tu as développé toi-même et ce que ce projet t’a appris."
  },
  generic: {
    title: "Ton troisième projet",
    text: "Remplace cette fiche par l’un de tes projets les plus solides. Pour un recruteur, privilégie les projets récents et ceux qui montrent clairement tes compétences actuelles."
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalText.textContent = project.text;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
