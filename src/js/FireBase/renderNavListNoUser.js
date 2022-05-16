export default function renderNavListNoUser() {
  const navList = document.querySelector('.list-nav');
  navList.innerHTML = `
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
