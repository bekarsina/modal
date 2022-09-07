let product = {
  title: "",
  description: "",
  discountPrice: "",
  mainPrice: "",
  img: "",
};

let modal = document.querySelector(".conteiner");
let closeModalBtn = document.querySelector(".close-modal");
let skipModal = document.querySelector(".skip-modal");


skipModal.addEventListener('click', closeModal)

closeModalBtn.addEventListener('click', closeModal)

function closeModal(){
  modal.classList.add('hidden')
}