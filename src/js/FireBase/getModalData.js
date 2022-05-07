// import createUserWithEmailAndPassword from './FireBase';

export default function getModalData(event) {
  //   event.preventDefault();

  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  //   console.log(email, password);
  //   if (email === '' || password === '') {
  //     alert('все поля должны быть заполнены');
  //     event.currentTarget.reset();
  //     return;
  //   }

  const user = {
    email,
    password,
  };
  console.log(user);
  //   event.currentTarget.reset();
  return user;

  //createUserWithEmailAndPassword (user);
}
