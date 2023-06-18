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

  const nextPicture = () => {
    let index = +document.querySelector(".show").dataset.pictureId + 1;

    if (index >= pictures.length) {
      index = 0;
    }
    if (index < pictures.length) {
      document.querySelector(".show").classList.remove("show");
      pictures[index].classList.add("show");

      document.querySelector(".selected").classList.remove("selected");
      selectCircle();
      resetTimer();
    }
  };
  const previousPicture = () => {
    let index = +document.querySelector(".show").dataset.pictureId - 1;

    if (index < 0) {
      index = pictures.length - 1;
    }
    if (index >= 0) {
      document.querySelector(".show").classList.remove("show");
      pictures[index].classList.add("show");

      document.querySelector(".selected").classList.remove("selected");
      selectCircle();
      resetTimer();
    }
  };

  const selectCircle = () => {
    const circles = document.querySelectorAll(".circle");

    const activePictureId = document.querySelector(".show").dataset.pictureId;
    circles[activePictureId].classList.add("selected");
  }

  const navDots = (() => {
    const mainContainer = document.querySelector(".main-content");

    const circleContainer = document.createElement("div");
    circleContainer.classList.add("circle-container");
    mainContainer.append(circleContainer);

    for (let i = 0; i < pictures.length; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.dataset.circleId = i;
      circleContainer.append(circle);

      pictures[i].dataset.pictureId = i;
    }

    if (document.querySelector(".show")) {
      selectCircle();
    }
  })();

  const circles = document.querySelectorAll(".circle");
  circles.forEach(circle => {
    circle.addEventListener('click', (e) => {
      const index = e.target.dataset.circleId;
      document.querySelector(".show").classList.remove("show");
      pictures[index].classList.add("show");

      document.querySelector(".selected").classList.remove("selected");
      selectCircle();
      resetTimer();
    })
  });

  let slideInterval = setInterval(nextPicture, 5000);

  const resetTimer = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextPicture, 5000);
  };

  return { nextPicture, previousPicture };
})();

document.querySelector(".arrow-left").onclick = slider.previousPicture;
document.querySelector(".arrow-right").onclick = slider.nextPicture;
