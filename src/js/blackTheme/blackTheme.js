import blackThemeBody from "./blackThemeBody";
import blackThemeText from "./blackThemeText";
localStorage.setItem("toggle", false);

const switcher = e => {
    localStorage.setItem("toggle", e.currentTarget.checked)
    blackThemeBody();
    blackThemeText();
};

export default switcher;