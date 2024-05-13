//Tema de cores
const themeMap = {
  dark: "light",
  light: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;


//Modal Funcionando

const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".fa-solid.fa-circle-xmark");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});



const openNewModalButton = document.getElementById('openNewModalButton');
const closeNewModalButton = document.querySelector("#new-modal .fa-circle-xmark");
const newModal = document.querySelector("#new-modal");
const newFade = document.querySelector("#new-fade");

const toggleNewModal = () => {
  newModal.classList.toggle("hide");
  newFade.classList.toggle("hide");
};

openNewModalButton.addEventListener("click", toggleNewModal);
closeNewModalButton.addEventListener("click", toggleNewModal);



//Editar tarefa (página)
const editIcon = document.querySelector('.input-task i.fa-pencil');
const taskInput = document.getElementById('task');


editIcon.addEventListener('click', function() {
  taskInput.removeAttribute('readonly');
  taskInput.focus();
});
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const newTask = taskInput.value;
    taskInput.value = newTask;
    taskInput.setAttribute('readonly', true);
  }
});




//"Apagar a tarefa" (página)
const closeIcon = document.querySelector('.input-task i.fa-circle-xmark');
const taskField = document.querySelector('.input-task');
closeIcon.addEventListener('click', function() {
  taskField.style.display = 'none';
});