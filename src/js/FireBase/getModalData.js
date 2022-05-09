// import createUserWithEmailAndPassword from './FireBase';

export default function getModalData(event) {
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Please enter values');
    event.currentTarget.reset();
    return;
  }

  const user = {
    email,
    password,
  };

  //   event.currentTarget.reset();
  return user;

  //createUserWithEmailAndPassword (user);
}
