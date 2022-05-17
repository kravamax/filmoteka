const blackThemeLogin = () => {
  if (JSON.parse(localStorage.getItem("toggle"))) {
    document.querySelector(".modal__reg").classList.add("black--login__modal");
    document.querySelector(".modal__button-auth").classList.add("black--login__button");
    document.querySelector(".modal__cross--reg").classList.add("black--modal__cross");
  }
  else {
    document.querySelector(".modal__reg").classList.remove("black--login__modal");
    document.querySelector(".modal__button-auth").classList.remove("black--login__button");
    document.querySelector(".modal__cross--reg").classList.remove("black--modal__cross");
  };
};

export default blackThemeLogin;