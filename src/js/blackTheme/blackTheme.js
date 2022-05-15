import blackThemeBody from './blackThemeBody';
import blackThemeText from './blackThemeText';
import blackThemeEmpty from './blackThemeEmpty';
//localStorage.setItem("toggle", false);

const switcher = e => {
  localStorage.setItem('toggle', e.currentTarget.checked);
  blackThemeBody();
  blackThemeText();
  blackThemeEmpty();
};

export default switcher;
