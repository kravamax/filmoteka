const blackThemeTeam = () => {
    if (JSON.parse(localStorage.getItem("toggle"))) {
        document.querySelector(".team__content").classList.add('black--team__content');
        document.querySelector(".modal__cross").classList.add('black--modal__cross');
    }
    else {
        document.querySelector(".team__content").classList.remove('black--team__content');
        document.querySelector(".modal__cross").classList.remove('black--modal__cross');
    }
}; 

export default blackThemeTeam;