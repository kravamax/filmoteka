const blackThemeText = () => {
  // console.log(JSON.parse(localStorage.getItem("toggle")))
  const textBlack = [...document.querySelectorAll('.film-title')];
  if (JSON.parse(localStorage.getItem('toggle'))) {
    textBlack.map(elem => elem.classList.add('black--text'));
  } else {
    textBlack.map(elem => elem.classList.remove('black--text'));
  }
};

export default blackThemeText;
