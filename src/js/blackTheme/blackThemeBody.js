const blackThemeBody = () => {
    if (JSON.parse(localStorage.getItem("toggle"))) {
        document.body.classList.add('black--body');
        document.querySelector(".footer").classList.add('black--footer');
    }
    else {
        document.body.classList.remove('black--body');
        document.querySelector(".footer").classList.remove('black--footer');
    };
};

export default blackThemeBody;