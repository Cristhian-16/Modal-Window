'use strict';

const cerrar = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnsOpen =
  document.querySelectorAll('.show-modal'); /* Selecionar todos */

const general = () => {
  const openOverlay = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const outOverlay = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  for (let i = 0; i < btnsOpen.length; i++) {
    btnsOpen[i].addEventListener('click', openOverlay);
  }

  cerrar.addEventListener('click', outOverlay);
  overlay.addEventListener('click', outOverlay);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      outOverlay();
    }
  });
};

general();
