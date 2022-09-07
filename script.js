let product = {
  title: "",
  description: "",
  discountPrice: "",
  mainPrice: "",
  img: "",
};

let openModalBtn = document.querySelector(".open-modal");
let modal = document.querySelector(".conteiner");
let closeModalBtn = document.querySelector(".close-modal");
let skipModal = document.querySelector(".skip-modal");


skipModal.addEventListener('click', colseModal)

closeModalBtn.addEventListener('click', colseModal)

openModalBtn.addEventListener("click", openModal);

function openModal() {
  openModalBtn.classList.add("hidden");
  modal.classList.remove("hidden");
}

function colseModal() {
  modal.classList.add("hidden");
  openModalBtn.classList.remove("hidden");
}
