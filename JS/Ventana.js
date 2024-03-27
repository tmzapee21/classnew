const openModal = document.querySelector('#bton1');
const modal = document.querySelector('#Ventana1');
const closeModal = document.querySelector('#Ventana1 button');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});
