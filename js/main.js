const main = document.querySelector("main");

function init() {
  // modify the title of the page
  document.title = infos.profil.name;
  header();
  banner();
  sectionCards();
  footer();
  SeoTags();
}

init();

function footer() {
  const footer = document.querySelector("footer");
  const container = document.createElement("div");
  container.classList.add("container");
  console.log(infos.footer);
  footer.appendChild(container);
  main.appendChild(footer);
}

function SeoTags() {
  infos.SEOTags.forEach((tag) => {
    const meta = document.createElement(tag.name ? "meta" : "link");
    if (tag.name) {
      meta.setAttribute("name", tag.name);
      meta.setAttribute("content", tag.content);
    } else if (tag.property) {
      meta.setAttribute("property", tag.property);
      meta.setAttribute("content", tag.content);
    } else if (tag.rel) {
      meta.setAttribute("rel", tag.rel);
      meta.setAttribute("href", tag.href);
    }
    document.head.appendChild(meta);
  });
}
