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

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Activer le mode clair" : "Activer le mode sombre"
    );
    themeToggle.setAttribute(
      "title",
      isDark ? "Mode clair" : "Mode sombre"
    );
  }
}

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

// Met à jour le libellé du bouton au chargement
applyTheme(document.documentElement.dataset.theme || "light");
