const createButton = document.querySelector(".create-button");
const input = document.querySelector(".todo-input");
const itemContainer = document.querySelector(".item-container");
const totalCount = document.querySelector(".total-count");

const todoItems = [];

const createTodoItem = () => {
  // 拿到輸入匡裡面的值
  const inputValue = input.value;

  // 透過 createTodoItemData 產生 todo item 的物件
  const todoItem = createTodoItemData(inputValue);

  // 拿到 todo item 物件後，放進 todoItems 陣列中
  todoItems.push(todoItem);

  console.log(todoItems);

  // 更新 total count
  updateTotalCount();

  // 清空輸入匡
  clearInput();

  // 把所有 todo items 顯示在畫面上
  renderTodoItems();
}

const generateTodoItem = (text, deleteIndex) => {
  const container = document.createElement("div");

  container.classList.add("todo-item-container");

  const itemContainer = document.createElement("div");

  const itemText = document.createTextNode(text);

  itemContainer.appendChild(itemText);

  // 新增刪除按鈕
  
  const deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", function() {
    // delete button 要做的事情
    todoItems.splice(deleteIndex, 1);
    renderTodoItems();
    updateTotalCount();
  });

  deleteButton.classList.add("delete-button");

  const deleteButtonText = document.createTextNode("-");

  deleteButton.appendChild(deleteButtonText);

  container.appendChild(itemContainer);
  container.appendChild(deleteButton);

  return container;
}

const createTodoItemData = (text) => {
  const data = {
    text: text
  };
  
  return data;
}

const renderTodoItems = () => {
  clearTodoItems();
  for (let i = 0; i < todoItems.length; i++) {
    const todoItem = todoItems[i];
    const { text } = todoItem;

    const todoItemElement = generateTodoItem(text, i);

    itemContainer.appendChild(todoItemElement);
  }
}

const clearTodoItems = () => {
  itemContainer.innerHTML = "";
}

const clearInput = () => {
  input.value = "";
}

const updateTotalCount = () => {
  totalCount.innerHTML = todoItems.length;
}

createButton.addEventListener("click", createTodoItem);