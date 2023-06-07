const elements = document.querySelectorAll(".elements");
elements.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector(".list").classList.toggle("show-list");
    item.classList.toggle("active");
  });
});
