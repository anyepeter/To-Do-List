import renderItems from './addItems.js';
import items from './arry.js';

const footer = document.getElementById('footer');

const completedAll = () => {
  footer.addEventListener('click', () => {
    items.forEach((elem) => {
      if (elem.completed) {
        const index = items.parentElement;
        items.splice(index, 1);
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
    renderItems();
  });
};

export default completedAll;