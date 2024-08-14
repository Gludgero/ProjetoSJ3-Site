const start = document.querySelector(".start");
const aboutUs = document.querySelector(".about-us");
const services = document.querySelector(".services");
const contact = document.querySelector(".contacts");

start.addEventListener("click", () => {
  start.classList.add("highlighted");
  aboutUs.classList.remove("highlighted");
  services.classList.remove("highlighted");
  contact.classList.remove("highlighted");
});

aboutUs.addEventListener("click", () => {
  start.classList.remove("highlighted");
  aboutUs.classList.add("highlighted");
  services.classList.remove("highlighted");
  contact.classList.remove("highlighted");
});

services.addEventListener("click", () => {
  start.classList.remove("highlighted");
  aboutUs.classList.remove("highlighted");
  services.classList.add("highlighted");
  contact.classList.remove("highlighted");
});

contact.addEventListener("click", () => {
  start.classList.remove("highlighted");
  aboutUs.classList.remove("highlighted");
  services.classList.remove("highlighted");
  contact.classList.add("highlighted");
});
