const TODO_FORM = document.getElementById('todo-form');
const TODO_INPUT = document.getElementById('todo-input');
const CARD_BODY_1 = document.querySelectorAll('.card-body')[0];
const CARD_BODY_2 = document.querySelectorAll('.card-body')[1];
const TODO_LIST = document.querySelector('.list');

event_listeners();

function event_listeners() {
  TODO_FORM.addEventListener('submit', form_validation);
  CARD_BODY_2.addEventListener('click', remove_Todos_UI);

}

function form_validation(event) {
  let new_todo = TODO_INPUT.value.trim();

  if (new_todo === '') {
    alert('Bir todo daxil edin!!!');
  } else {
    add_todos_UI(new_todo);
  }

  event.preventDefault();
}

function add_todos_UI(params_new_todo) {
  TODO_LIST.innerHTML += `
        <li class="list-item d-flex justify-content-between align-items-center">
                ${params_new_todo}
                <a href="#">
                <img class="x-icon" src="./img/Group 77.png" alt="icon">
                </a>
              </li>


    `;

  TODO_INPUT.value = '';
}


function remove_Todos_UI(event) {

  isIcon = event.target;

  if (isIcon.className === 'x-icon') {
    isIcon.parentElement.parentElement.remove();

  }

}




