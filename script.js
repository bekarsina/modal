let modal = document.querySelector(".conteiner");
let closeModalBtn = document.querySelector(".close-modal");
let skipModal = document.querySelector(".skip-modal");
let btn = document.querySelector(".btn");
let section = document.querySelector(".section");


skipModal.addEventListener('click', closeModal)

closeModalBtn.addEventListener('click', closeModal)

btn.addEventListener('click', () => {
  modal.classList.remove('hidden')
  modal.classList.add('block')
  // section.classList.add('blur-sm')

})

function closeModal(){
  modal.classList.add('hidden');
  modal.classList.remove('block')
  // section.classList.remove('blur-sm')
}