import icon from '../../images/symbol-defs.svg';

export default function HeaderLib() {
  return `<header class="header-lib">
    <div class="header-wrapper header-wrapper--libr">
    
        <div class="header-top">
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
            <nav class="nav-menu">
                <ul class="list-nav">
                    <li class="item ">
                        <a href="#" class="home-link">
                            Home
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="item-current library-link">
                            My library
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="singOut">
                        Sing Out
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
        <div class="header__btn-cont">
            <button type="button" class="header__btn header__btn--watchet">WATCHED</button>
            <button type="button" class="header__btn header__btn--queue">QUEUE</button>
        </div>
    </div>
    
</header>
`;
}
