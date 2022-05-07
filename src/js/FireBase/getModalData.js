

import createUserWithEmailAndPassword from './FireBase'


export default function getModalData (event) {
    event.preventDefault();
   

    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("все поля должны быть заполнены");
        event.currentTarget.reset();
        return;
    }
    const user = {
        email: email.value,
        password: password.value
    }
    console.log(user);

    event.currentTarget.reset();

    //createUserWithEmailAndPassword (user);
}