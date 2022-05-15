import iconGithub from '../images/team/github.svg';
import iconClose from '../images/modalCard/math-multiplication.svg';

import photoMaxim from '../images/team/Maxim.jpg';
import photoTanya from '../images/team/Tanya.jpeg';
import photoAndriy from '../images/team/Andriy.jpg';
import photoJulia from '../images/team/Julia.jpg';
import photoRoman from '../images/team/Roman.jpg';
import photoVlad from '../images/team/Vlad.jpg';
import photoValeriia from '../images/team/Valeriia.jpg';
import photoOlekciy from '../images/team/Olekciy.jpg';
import photoKostya from '../images/team/Kostya.jpg';

export default function modalTeam() {
  return `
     <div id="team" class="team">
     <a href="#footer" class="team__area"></a>
     <div class="team__body">
       <div class="team__content">
         <div class="title__wrapper">
           <a class="ref__readme" href="https://goit.ua/" target="_blank" aria-label="Our Github">
             <img
               class="goitLogo"
               src="https://goit.ua/wp-content/themes/1/images/Layer.png"
               alt="GoIT"
               title="Our Github"
             />
           </a>
           <h2 lang="en" class="team__title">Our Team</h2>
         
         </div>
   
         <ul class="team__list">
           <li class="team-card-list-item">
             <img class="team__img" src="${photoMaxim}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Maxim <span class="under">-</span>
             </h2>
             <p class="team__discription">Team Lead</p>
             <a
               href="https://github.com/kravamax"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoTanya}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Tetyana <span class="under">-</span>
             </h2>
             <p class="team__discription">Scrum Master</p>
             <a
               href="https://github.com/TanyaDuka"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoAndriy}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Andriy <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/ALiasota"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoJulia}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Julia <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/YuliiaShy"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoRoman}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Roman <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/Roman-Glyshanitsya"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoVlad}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Vladislav <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/VladyslavSht"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoValeriia}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Valeriia <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/ValeriiaMalyshko"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoOlekciy}" width="150" alt="team-member" />
             <h2 class="team__name">
               <span class="under">-</span> Oleksiy <span class="under">-</span>
             </h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/puerarongo"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>
           <li class="team-card-list-item">
             <img class="team__img" src="${photoKostya}" width="150" alt="team-member" />
             <h2 class="team__name"><span class="under">-</span> Konstantin <span class="under">-</span></h2>
             <p class="team__discription">Developer</p>
             <a
               href="https://github.com/kostyaget"
               target="_blank"
               aria-label="Our Github"
             >
               <img class="git-logo" src="${iconGithub}" alt="GoIT" width="25" />
             </a>
           </li>   
         </ul>   
         <p class="team__line">
           <span class="line">
               ___________________________________________________________________
           </span>
         </p>       
         <button type="button" class="modal-team-close">
            <svg class="modal__cross">
                <use  href="${iconClose}#Layer_1"></use>
            </svg>
          </button>
       </div>
     </div>
   </div>`;
}
