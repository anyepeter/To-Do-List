import './style.css';
import addFunction from './modules/addItem.js';
import renderItems from './modules/addItems.js';
import completedAll from './modules/interactive.js';

addFunction();
renderItems();
completedAll();

export default { addFunction, renderItems, completedAll };
