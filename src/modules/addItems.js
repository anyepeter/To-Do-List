import items from './arry.js';

const itemContainer = document.querySelector('.items-section');
const editInput = document.getElementsByClassName('bi-pencil-square');
const editTaskEl = document.getElementsByClassName('editsectionInput');
const toDoTask = document.getElementsByClassName('editText');

const renderItems = () => {
  let content = '';

  items.forEach((element, index) => {
    content += `
    <li class="to-do__item " id=${index}>
    <div class="editsectionInput active flex-row ">
    <input type="text" class="inputEdit to-do__input"> 
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
    const editTaskBtns = [...editInput];
    editTaskBtns.forEach((item) => {
      item.addEventListener('click', () => {
        const edititemList = [...editTaskEl];
        const ItemToBeEdit = edititemList[item.id];
        const itemIntheInputBtn = ItemToBeEdit.childNodes[1];
        ItemToBeEdit.classList.remove('active');
        toDoTask[item.id].classList.add('active');
        itemIntheInputBtn.value = items[item.id].description;
        ItemToBeEdit.childNodes[2].addEventListener('click', () => {
          const newItemModify = ItemToBeEdit.childNodes[1].value;
          if (newItemModify) {
            items[item.id].description = newItemModify;
            localStorage.setItem('items', JSON.stringify(items));
            renderItems();
          } else {
            itemIntheInputBtn.classList.add('Error');
            setTimeout(() => {
              itemIntheInputBtn.classList.remove('Error');
            }, 2000);
          }
        });
      });
    });
  };
  itemContainer.innerHTML = content;
  removeFunction();
  editFunction();
};

export default renderItems;