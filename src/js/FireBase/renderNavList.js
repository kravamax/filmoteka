export default function renderNavList() {
  const navList = document.querySelector('.list-nav');
  navList.innerHTML = `<li class="item ">
                        <a href="#" class="item-current home-link">
                            Home
                        </a>
                    </li>
                    <li class="item">
                        <a href="#" class="library-link">
                        My library
                        </a>
                    </li>
                   
                    <li class="item">
                        <a href="#" class="singOut">
                        Sing Out
                        </a>
                    </li>
                    `;
}
