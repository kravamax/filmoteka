const blackThemeEmpty = () => {
  if (document.querySelector('.empty__text')) {
    // console.log(document.querySelector(".empty__text"))
    if (JSON.parse(localStorage.getItem('toggle'))) {
      document.querySelector('.empty__text').classList.add('black--text');
    } else {
      document.querySelector('.empty__text').classList.remove('black--text');
    }
  }
};

export default blackThemeEmpty;
