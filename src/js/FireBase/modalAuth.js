export default function modalAuth(head, btn) {
  return `
    
    <div class='overlay' >
  
      <div class='modal modal__reg'>
      <h4 class='modal__reg-head'>${head}</h4>
        <div class="modal__button-container modal__button-container--head">
            <button type="button" class="modal__button modal__button-auth">
                <svg class="modal__cross modal__cross--reg">
                    <use  href="./math-multiplication.cfd95509.svg#Layer_1"></use>
                </svg>
            </button>
        </div>
    <form class="login-form" >
      <label>
        
        <input type="email" name="email" placeholder='Email'/>
      </label>
      <label>
        
        <input type="password" name="password" placeholder='Password'/>
      </label>
      <button class="header__btn login__subm btn-active" type="submit">${btn}</button>
    </form>
    </div>`;
}
