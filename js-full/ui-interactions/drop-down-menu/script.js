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

const slider = (() => {
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
  };
  return { nextPicture, previousPicture}
})();

document.querySelector('.arrow-left').onclick = slider.previousPicture;
document.querySelector('.arrow-right').onclick = slider.nextPicture;

const navDots = () => {
  const numImg = document.querySelectorAll('.picture');
  const collageContainer = document.querySelector('.collage');
  const rightArrow = document.querySelector('.arrow-right');

  const circleContainer = document.createElement('div');
  circleContainer.classList.add("circle-container")
  collageContainer.insertBefore(circleContainer, rightArrow);

  for (let i = 0; i < numImg.length; i++) {
    const circle = document.createElement("div");
    circle.dataset.circleId = i;
    circle.classList.add("circle")
    circleContainer.append(circle);
  }
}

navDots();