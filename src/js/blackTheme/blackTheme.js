localStorage.setItem("toggle", false);

const switcher = e => {
    localStorage.setItem("toggle", e.currentTarget.checked)
    const textBlack = [...document.querySelectorAll(".film-title")]
    if (e.currentTarget.checked) {
        document.body.classList.add('black--body');
        document.querySelector(".footer").classList.add('black--footer');
        textBlack.map(elem => elem.classList.add('black--text'));
    }
    else {
        document.body.classList.remove('black--body');
        document.querySelector(".footer").classList.remove('black--footer');
        textBlack.map(elem => elem.classList.remove('black--text'));
    }
}

export default switcher;