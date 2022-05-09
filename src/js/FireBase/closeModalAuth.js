export default function closeModalAuth() {
  const overlay = document.querySelector('.overlay');

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      modalWindow.innerHTML = '';
    }
  };

  overlay.addEventListener('click', handleBackdropClick);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalWindow.innerHTML = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
}
