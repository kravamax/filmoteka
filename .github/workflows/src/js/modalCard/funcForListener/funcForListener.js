import { watchedButton, queueButton } from "../funcModal/modalCardMarkup";

export const forOpen = () => {
    document.querySelector('#watchedButton').addEventListener('click', watchedButton);
    document.querySelector('#queueButton').addEventListener('click', queueButton);
};

export const forClose = () => {
    document.querySelector('#watchedButton').removeEventListener('click', watchedButton);
    document.querySelector('#queueButton').removeEventListener('click', queueButton);
};