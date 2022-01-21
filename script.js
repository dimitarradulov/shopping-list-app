const button = document.querySelector('#enter-button');
const input = document.querySelector('#user-input');
const ul = document.querySelector('ul');
const listItem = ul.querySelectorAll('li');
const modal = document.querySelector('#myModal');
const modalYesBtn = document.querySelector('.yes-btn');
const modalCancelBtn = document.querySelector('.no-btn');
const clearBtn = document.querySelector('.btn-clear');
const modalWarning = document.querySelector('.modal-warning');
const shoppingList = document.querySelector('.shopping-list');
let liArr = [];

// Functions
function inputLength() {
  return input.value.length;
}

function createLiElement() {
  ul.insertAdjacentHTML(
    'beforeend',
    `<li>${input.value}<i class="remove-item fas fa-minus-circle"></i></li>`
  );

  if (shoppingList.classList.contains('hidden'))
    shoppingList.classList.remove('hidden');

  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createLiElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createLiElement();
  }
}

// function modalClose() {
//   modal.classList.add('hidden');
// }

// function modalReveal() {
//   modal.classList.remove('hidden');
// }

function hideShoppingListSection() {
  if (ul.innerHTML === '') shoppingList.classList.add('hidden');
}

// Events
button.addEventListener('click', addListAfterClick);
input.addEventListener('keydown', addListAfterKeypress);

ul.addEventListener('click', function (e) {
  if (e.target.classList.contains('remove-item')) {
    const clicked = e.target;
    const li = clicked.closest('li');
    li.remove();
    hideShoppingListSection();
  }
});

clearBtn.addEventListener('click', function () {
  ul.querySelectorAll('li').forEach((li) => li.remove());
  hideShoppingListSection();
});

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     modalClose();
//   }
// });
