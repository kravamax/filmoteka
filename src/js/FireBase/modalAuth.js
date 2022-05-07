export default function modalAuth() {
    return (
        
    `<style>
    .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
}

.modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  width: 500px;
        height:200px;
        padding:30px;

}
      .login-form {
        
        display: flex;
        flex-direction: column;
        justify-content:center;
      }

      .login-form label {
        margin-bottom: 16px;
      }

      .login-form input,
      .login-form button {
        width: 300px;
        padding: 4px;
        font: inherit;
      }

    </style>
    <div class='overlay' >
      <div class='modal'>
    <form class="login-form" >
      <label>
        
        <input type="email" name="email" placeholder='Email'/>
      </label>
      <label>
        
        <input type="password" name="password" placeholder='Password'/>
      </label>
      <button type="submit">Login</button>
    </form>
    </div>`
    )
}