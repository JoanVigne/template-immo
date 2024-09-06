function sectionCards() {
  if (!data || !Array.isArray(data)) {
    console.error("Invalid data provided to sectionCards function");
    return;
  }
  const sectionCards = document.createElement("section");
  sectionCards.classList.add("section-cards");

  const container = document.createElement("div");
  container.classList.add("container");
  sectionCards.appendChild(container);

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `${item.type} in ${item.location}`;
    card.appendChild(image);

    const containerText = document.createElement("div");
    containerText.classList.add("container-text");
    card.appendChild(containerText);

    const type = document.createElement("h3");
    type.textContent = item.type;
    containerText.appendChild(type);

    const location = document.createElement("p");
    location.textContent = `Location: ${item.location}`;
    containerText.appendChild(location);

    const price = document.createElement("p");
    price.textContent = `Price: $${item.price.toLocaleString()}`;
    containerText.appendChild(price);

    const bedrooms = document.createElement("p");
    bedrooms.textContent = `Bedrooms: ${item.bedrooms}`;
    containerText.appendChild(bedrooms);

    const bathrooms = document.createElement("p");
    bathrooms.textContent = `Bathrooms: ${item.bathrooms}`;
    containerText.appendChild(bathrooms);

    const area = document.createElement("p");
    area.textContent = `Area: ${item.area} sq ft`;
    containerText.appendChild(area);

    const description = document.createElement("p");
    description.textContent = item.description;
    containerText.appendChild(description);

    container.appendChild(card);
  });

  document.querySelector("main").appendChild(sectionCards);
}
