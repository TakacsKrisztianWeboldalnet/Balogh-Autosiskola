document
  .querySelector(".mobile-menu")
  .addEventListener("click", function () {
    const menuContainer = document.querySelector(".mobile-menu-container");

    menuContainer.classList.toggle("open");

    document.addEventListener("click", closeOnOutsideClick);
  });

function closeOnOutsideClick(event) {
  const menuContainer = document.querySelector(".mobile-menu-container");
  const menuButton = document.querySelector(".mobile-menu-button");

  if (
    !menuContainer.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    menuContainer.classList.remove("open");
    document.removeEventListener("click", closeOnOutsideClick);
  }
}
