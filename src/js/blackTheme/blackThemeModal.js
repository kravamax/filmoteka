const blackThemeModal = () => {
  const buttonBlack = [...document.querySelectorAll(".button")];

  if (JSON.parse(localStorage.getItem("toggle"))) {
    document.querySelector(".jBox-container").style.backgroundColor = "#131419";
    document.querySelector(".jBox-container").style.color = "#ffffff";
    document.querySelector(".modal__button").classList.add("black--modal__button");
    document.querySelector(".modal__cross").classList.add("black--modal__cross");
    buttonBlack.map(elem => elem.classList.add("black--button"));
  }
  else {
    document.querySelector(".jBox-container").style.backgroundColor = "#ffffff";
    document.querySelector(".jBox-container").style.color = "#000000";
    document.querySelector(".modal__button").classList.remove("black--modal__button");
    document.querySelector(".modal__cross").classList.remove("black--modal__cross");
    buttonBlack.map(elem => elem.classList.remove("black--button"));
  };
};

export default blackThemeModal;