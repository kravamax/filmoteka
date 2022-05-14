//localStorage.setItem("toggle", false);
console.log(document.querySelector(".switch__checkbox"))

const switcher = e => {
    console.log(666)
    localStorage.setItem("toggle", e.currentTarget.checked)
    const textBlack = [...document.querySelectorAll(".film-title")]
    if (e.currentTarget.checked) {
        document.body.classList.add('black--body');
        document.querySelector(".footer").classList.add('black--footer');
        textBlack.map(elem => elem.classList.add('black--text'));
        document.querySelector(".switch__checkbox").checked = true
    }
    else {
        document.body.classList.remove('black--body');
        document.querySelector(".footer").classList.remove('black--footer');
        textBlack.map(elem => elem.classList.remove('black--text'));
        document.querySelector(".switch__checkbox").checked = false
    }
}


export default switcher;