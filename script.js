const button = document.querySelector('#enter-button');
const input = document.querySelector('#user-input');
const ul = document.querySelector('ul');
const listItem = ul.querySelectorAll('li');
const modal = document.querySelector('#myModal');
const modalYesBtn = document.querySelector('.yes-btn');
const modalCancelBtn = document.querySelector('.no-btn');
const clearBtn = document.querySelector('.btn-clear');
const modalWarning = document.querySelector('.modal-warning');
let liArr = [];

// Functions
function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement('li');
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('remove-item');
  deleteIcon.classList.add('fas', 'fa-minus-circle');
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteIcon);
  ul.appendChild(li);
  ul.classList.remove('hidden');
  liArr.push(li);
  for (let i = 0; i < liArr.length; i++) {
    liArr[i].querySelector('i').addEventListener('click', function () {
      modalReveal();
      modalYesBtn.addEventListener('click', function () {
        liArr[i].parentElement.removeChild(liArr[i]);
        if (ul.textContent === '') {
          ul.classList.add('hidden');
        }
        clearBtn.classList.add('hidden');
        modalClose();
      });
    });
  }
  clearBtn.classList.remove('hidden');
  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function modalClose() {
  modal.classList.add('hidden');
  modalClear.classList.add('hidden');
}

function modalReveal() {
  modal.classList.remove('hidden');
}

// Events
button.addEventListener('click', addListAfterClick);

input.addEventListener('keydown', addListAfterKeypress);

modalCancelBtn.addEventListener('click', modalClose);

document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});

clearBtn.addEventListener('click', function () {
  modalWarning.textContent = 'Are you sure?';
  modalYesBtn.textContent = 'Yes';
  modalCancelBtn.textContent = 'No';
  modalReveal();
  modalYesBtn.addEventListener('click', function () {
    ul.textContent = '';
    ul.classList.add('hidden');
    clearBtn.classList.add('hidden');
    modalClose();
  });
});
