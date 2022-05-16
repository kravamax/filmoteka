const blackThemeBody = () => {
    if (JSON.parse(localStorage.getItem("toggle"))) {
        document.body.classList.add('black--body');
        document.querySelector(".footer").classList.add('black--footer');
        //document.querySelector(".switch__checkbox").checked = true
    }
    else {
        document.body.classList.remove('black--body');
        document.querySelector(".footer").classList.remove('black--footer');
        //document.querySelector(".switch__checkbox").checked = false
    };
};

export default blackThemeBody;

