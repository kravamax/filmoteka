export default function renderNavList(user) {
  const navList = document.querySelector('.list-nav');
  navList.innerHTML = `
                    <li class="item ">
                        <div class="user-cont"><p>${user}</p></div>
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
