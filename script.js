
const input = document.getElementById('newToDo');
const addButton = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');
function addTask() {

  const toDoText = input.value;
  input.value = '';
  const listItem = document.createElement('li');
  const mytext = document.createElement('span');
  const deleteButton = document.createElement('button');
  const mycheckbox = document.createElement('input');

  mycheckbox.type = 'checkbox';
  listItem.appendChild(mycheckbox)
  listItem.appendChild(mytext);
  listItem.appendChild(deleteButton);
  mytext.textContent = toDoText;
  deleteButton.textContent = 'Delete';
  toDoList.appendChild(listItem);

  deleteButton.addEventListener('click', function () {
    toDoList.removeChild(listItem);
  })

  mycheckbox.addEventListener('change', function () {
    if (mycheckbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  })
  input.focus();
}
addButton.addEventListener('click', addTask);