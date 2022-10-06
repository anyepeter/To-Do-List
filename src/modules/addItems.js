import items from './arry.js';

const itemContainer = document.querySelector('.items-section');
const editTaskd = document.getElementsByClassName('editsectionInput');
const itemTodo = document.getElementsByClassName('editText');

const renderItems = () => {
  let content = '';

  items.forEach((element, index) => {
    content += `
    <li id=${index}>
    <div class="editsectionInput active flex-row ">
    <input type="text" class="inputEdit to-do__input" value=${element.completed}> 
    <i class="bi bi-arrow-return-left addfunt" id=${index}></i>
    </div>
    <div class="flex-row editText">
    <input type="checkbox" ${element.completed && 'checked'}/>
    <p>${element.description}</p>
    <span class="icon-container">
    <i class="bi bi-three-dots-vertical" id=${index}></i>
    <i class="bi bi-trash " id=${index}></i>
    <i class="bi bi-pencil-square" id=${index}></i>
    </span>
    </div>
  </li>`;
  });

  const removeFunction = () => {
    const removeBtn = [...document.getElementsByClassName('bi-trash')];
    removeBtn.forEach((item) => {
      item.addEventListener('click', (elem) => {
        items.splice(elem.target.id, 1);
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
      });
    });
  };
  const editFunction = () => {
    const editTaskBtns = [...document.getElementsByClassName('bi-pencil-square')];
    editTaskBtns.forEach((item) => {
      item.addEventListener('click', () => {
        const edititemList = [...editTaskd];
        const ItemToBeEdit = edititemList[item.id];
        const itemIntheInputBtn = ItemToBeEdit.childNodes[1];
        ItemToBeEdit.classList.remove('active');
        itemTodo[item.id].classList.add('active');
        itemIntheInputBtn.value = items[item.id].description;
      });
    });
  };
  itemContainer.innerHTML = content;
  removeFunction();
  editFunction();
};

export default renderItems;