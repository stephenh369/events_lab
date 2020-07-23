document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
})

const handleFormSubmit = (event) => {
  event.preventDefault();

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
};

