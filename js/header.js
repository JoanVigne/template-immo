function header() {
  // generating the header with infos
  const header = document.querySelector("header");
  // title + logo
  const containerLogoTitle = document.createElement("div");
  containerLogoTitle.classList.add("container-logo-title");
  // Logo
  const logo = document.createElement("img");
  logo.src = infos.header.logo;
  logo.alt = "logo";

  // Title
  const title = document.createElement("h1");
  title.textContent = infos.header.title;

  containerLogoTitle.appendChild(logo);
  containerLogoTitle.appendChild(title);
  header.appendChild(containerLogoTitle);
  // Burger Menu
  const burgerMenu = document.createElement("div");
  burgerMenu.classList.add("burger-menu");
  burgerMenu.innerHTML = "&#9776;";
  header.appendChild(burgerMenu);

  // Navigation
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  infos.header.navigation.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item;
    a.href = "#" + item;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  header.appendChild(nav);

  // Burger Menu Toggle
  burgerMenu.addEventListener("click", () => {
    ul.classList.toggle("active");
  });
}
