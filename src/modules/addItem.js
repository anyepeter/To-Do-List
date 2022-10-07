import items from './arry.js';
import renderItems from './addItems.js';

const addBtn = document.querySelector('.addfunt');
const inputItems = document.querySelector('.to-do__input');

// addfunction
const addFunction = () => {
  addBtn.addEventListener('click', () => {
    const newItem = inputItems.value;
    if (newItem) {
      const item = {
        description: newItem,
        completed: false,
      };
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
      renderItems();
      inputItems.value = '';
    }
  });
};

export default addFunction;