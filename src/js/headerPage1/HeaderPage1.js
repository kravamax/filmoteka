import icon from '../../images/symbol-defs.svg';

export default function HeaderPage1() {
  return `<section class="header">
    <div class="header-wrapper">
    
        <div class="header-top">
        <div class='wrapper-logoANDswitch'>
            <div class="logo">
                <a href='#' class="logo-link">

                    <svg class="logo-images" width="24" height="24">
                        <use href="${icon}#film"></use>
                    </svg>
                    <span class="logo-name">
                        Filmoteka
                </a>
                </span>
                </a>
            </div>
            <div class="switch__container">
                <label class="switch">
                    <input class="switch__checkbox" type="checkbox" />
                    <span class="switch__slider"></span>
                </label>
            </div>
            </div>
            <nav class="nav-menu">
                <ul class="list-nav"> 
                </ul>
            </nav>
        </div>
        <form class="header-form">
        <label class='form-label animate__animated animate__slideInUp'>
            <input class='header-input' type="text" name="filmName" placeholder="Search movie" />
            </label>
            <button class='header-button--submit animate__animated animate__slideInUp' type="submit">
                <svg width="12" height="12" class="input-images">
                    <use href="${icon}#search"></use>
                </svg>
            </button>
        </form>
    </div>
</section>
`;
}
