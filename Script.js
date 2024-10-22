const LinkNoticias = document.querySelector("#LinkNoticias");
const LinkCarrera = document.querySelector("#LinkCarrera");
const LinkAlumnos = document.querySelector("#LinkAlumnos");
const LinkEscuela = document.querySelector("#LinkEscuela");

const NoticiasContent = document.querySelector("#NoticiasContent");
const CarreraContent = document.querySelector("#CarreraContent");
const AlumnosContent = document.querySelector("#AlumnosContent");
const EscuelaContent = document.querySelector("#EscuelaContent");

const MateriasPrimero = document.querySelector("#MateriasPrimero");
const MateriasSegundo = document.querySelector("#MateriasSegundo");
const MateriasTercero = document.querySelector("#MateriasTercero");


const LinkPrimero = document.querySelector("#LinkPrimero");
const LinkSegundo = document.querySelector("#LinkSegundo");
const LinkTercero = document.querySelector("#LinkTercero");

CarreraContent.style.setProperty("--bs-accordion-bg", "#284d34");
CarreraContent.style.setProperty("--bs-accordion-active-bg", "#284d34");
CarreraContent.style.setProperty("--bs-accordion-btn-color", "#ffffff");
CarreraContent.style.setProperty("--bs-accordion-active-color", "#a6bf8c");

LinkCarrera.addEventListener("click", () => {
	NoticiasContent.style.display = "none";
	CarreraContent.style.display = "Block";
	AlumnosContent.style.display = "none";
	EscuelaContent.style.display = "none";
	MateriasPrimero.style.display = "none";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "none";
	LinkPrimero.style.borderWidth = "0rem";
	LinkSegundo.style.borderWidth = "0rem";
	LinkTercero.style.borderWidth = "0rem";
});

LinkNoticias.addEventListener("click", () => {
	NoticiasContent.style.display = "Block";
	CarreraContent.style.display = "none";
	AlumnosContent.style.display = "none";
	EscuelaContent.style.display = "none";
	MateriasPrimero.style.display = "none";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "none";
	LinkPrimero.style.borderWidth = "0rem";
	LinkSegundo.style.borderWidth = "0rem";
	LinkTercero.style.borderWidth = "0rem";
});

LinkAlumnos.addEventListener("click", () => {
	NoticiasContent.style.display = "none";
	CarreraContent.style.display = "none";
	AlumnosContent.style.display = "Flex";
	MateriasPrimero.style.display = "Flex";
	EscuelaContent.style.display = "none";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "none";
	LinkPrimero.style.borderWidth = "0.5rem";
	LinkPrimero.style.borderStyle = "Solid";
	LinkPrimero.style.borderColor = "White";
});

LinkEscuela.addEventListener("click", () => {
	NoticiasContent.style.display = "none";
	CarreraContent.style.display = "none";
	AlumnosContent.style.display = "none";
	EscuelaContent.style.display = "Flex";
	MateriasPrimero.style.display = "none";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "none";
	LinkPrimero.style.borderWidth = "0rem";
	LinkSegundo.style.borderWidth = "0rem";
	LinkTercero.style.borderWidth = "0rem";

});

LinkPrimero.addEventListener("click", () =>
{
	MateriasPrimero.style.display = "Flex";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "none";
	LinkPrimero.style.borderWidth = "0.5rem";
	LinkPrimero.style.borderStyle = "Solid";
	LinkSegundo.style.borderWidth = "0rem";
	LinkTercero.style.borderWidth = "0rem";
	LinkPrimero.style.borderColor = "White";
})

LinkSegundo.addEventListener("click", () =>
{
	MateriasPrimero.style.display = "none";
	MateriasSegundo.style.display = "Flex";
	MateriasTercero.style.display = "none";
	LinkSegundo.style.borderWidth = "0.5rem";
	LinkSegundo.style.borderStyle = "Solid";
	LinkPrimero.style.borderWidth = "0rem";
	LinkTercero.style.borderWidth = "0rem";
	LinkSegundo.style.borderColor = "White";
})

LinkTercero.addEventListener("click", () =>
{
	MateriasPrimero.style.display = "none";
	MateriasSegundo.style.display = "none";
	MateriasTercero.style.display = "Flex";	
	LinkTercero.style.borderWidth = "0.5rem";
	LinkTercero.style.borderStyle = "Solid";
	LinkSegundo.style.borderWidth = "0rem";
	LinkPrimero.style.borderWidth = "0rem";
	LinkTercero.style.borderColor = "White";
})
