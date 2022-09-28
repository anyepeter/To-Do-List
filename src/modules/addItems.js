const itemsContainer = document.querySelector('.items');

const items = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'Complete to Do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the gym',
    completed: true,
    index: 2,
  },

];

const renderItems = () => {
  let content = '';

  items.forEach((element) => {
    content += `
        <li>
                    <input type="checkbox" ${element.completed && 'checked'} name="" id="" />
                    <p>${element.description}</p>
                    <span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                          </svg></span>
                    </span>
                </li> `;
  });
  itemsContainer.innerHTML = content;
};

export default renderItems;
