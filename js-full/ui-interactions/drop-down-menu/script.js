const elements = document.querySelectorAll(".elements");
elements.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector(".list").classList.toggle("show-list");
    item.classList.toggle("active");
  });
});

const updateContent = () => {
  const footer = document.querySelector(".footer");
  if (window.innerWidth < 350) {
    footer.classList.add("active");
  } else {
    footer.classList.remove("active");
  }
};

window.addEventListener("resize", updateContent);
updateContent();

const pictures = document.querySelectorAll(".picture");
let index = 0;
const nextPicture = () => {
  index += 1;
  if (index >= pictures.length) {
    index = 0;
  }
  if (index < pictures.length) {
    document.querySelector(".show").classList.remove("show");
    pictures[index].classList.add("show");
  }
};
const previousPicture = () => {
  index -= 1;
  if (index < 0) {
    index = pictures.length - 1;
  }
  if (index >= 0) {
    document.querySelector(".show").classList.remove("show");
    pictures[index].classList.add("show");
  }
}
