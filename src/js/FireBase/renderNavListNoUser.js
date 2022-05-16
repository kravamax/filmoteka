export default function renderNavListNoUser() {
  const navList = document.querySelector('.list-nav');
  navList.innerHTML = `<li class="item ">
                        <a href="#" class="today-link">
                            Top today
                        </a>
                    </li>
                    <li class="item ">
                        <a href="#" class="week-link">
                            Top week
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
                    `;
}
