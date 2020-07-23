document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteButton = document.querySelector("#delete-all");
  deleteButton.addEventListener("click", handleDeleteClick);
})

const handleFormSubmit = (event) => {
  event.preventDefault();

  console.log(event);

  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;

  console.log('title :>> ', title);
  console.log('author :>> ', author);
  console.log('category :>> ', category);

  const readingList = document.querySelector("#reading-list");
  const newListItem = document.createElement("li");
  newListItem.textContent = `${title} | ${author} | ${category}`;
  readingList.appendChild(newListItem);

  const form = document.querySelector("#new-item-form");
  form.reset();
};

const handleDeleteClick = () => {
  const readingList = document.querySelector("#reading-list");
  while (readingList.lastChild) {
    readingList.removeChild(readingList.lastChild);
  };
};
