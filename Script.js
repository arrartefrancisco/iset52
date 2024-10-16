const LinkNoticias = document.querySelector("#LinkNoticias");
const LinkCarrera = document.querySelector("#LinkCarrera");
const LinkAlumnos = document.querySelector("#LinkAlumnos");
const LinkEscuela = document.querySelector("#LinkEscuela");

const NoticiasContent = document.querySelector("#NoticiasContent");
const CarreraContent = document.querySelector("#CarreraContent");
const AlumnosContent = document.querySelector("#AlumnosContent");
const EscuelaContent = document.querySelector("#EscuelaContent");

CarreraContent.style.setProperty("--bs-accordion-bg", "#284d34");
CarreraContent.style.setProperty("--bs-accordion-active-bg", "#284d34");
CarreraContent.style.setProperty("--bs-accordion-btn-color", "#ffffff");
CarreraContent.style.setProperty("--bs-accordion-active-color", "#a6bf8c");

LinkCarrera.addEventListener("click", () => {
  NoticiasContent.style.display = "none";
  CarreraContent.style.display = "Block";
  AlumnosContent.style.display = "none";
  EscuelaContent.style.display = "none";
});

LinkNoticias.addEventListener("click", () => {
  NoticiasContent.style.display = "Block";
  CarreraContent.style.display = "none";
  AlumnosContent.style.display = "none";
  EscuelaContent.style.display = "none";
});

LinkAlumnos.addEventListener("click", () => {
  NoticiasContent.style.display = "none";
  CarreraContent.style.display = "none";
  AlumnosContent.style.display = "Block";
  EscuelaContent.style.display = "none";
});

LinkEscuela.addEventListener("click", () => {
  NoticiasContent.style.display = "none";
  CarreraContent.style.display = "none";
  AlumnosContent.style.display = "none";
  EscuelaContent.style.display = "Block";
});
