export default function HeaderPage1() {
  return `<section class="header">
    <div class="header-wrapper">
        <div class="header-top">
            <div class="logo">
                <a href='#' class="logo-link">

                    <svg class="logo-images" width="24" height="24">
                        <use href="./symbol-defs.f05ec621.svg#film"></use>
                    </svg>
                    <span class="logo-name">
                        Filmoteka
                </a>
                </span>
                </a>
            </div>
            <nav class="nav-menu">
                <ul class="list-nav">
                    <li class="item ">
                        <a href="#" class="item-current home-link">
                            Home
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="library-link">
                        My library
                        </a>
                    </li>
                    <li class="item ">
                        <a href="#" class="singIn">
                            Sing In
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="singUp">
                        Sing Up
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <form class="header-form">
            <input class='header-input' type="text" name="filmName" placeholder="Поиск фильмов" />
            <button class='header-button--submit' type="submit">

                <svg width="12" height="12" class="input-images">
                    <use href="./symbol-defs.f05ec621.svg#search"></use>
                </svg>
            </button>
        </form>
    </div>
</section>
`;
}
