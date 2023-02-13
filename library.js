// declare empty array for library
let myLibrary = [];
let i = 0;
//object constructor
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}
// function to add a new book to library
function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooksOnPage();
}
//for displaying the books in library
function displayBooksOnPage() {
  const books = document.querySelector(".books");
  // create card
  const card = document.createElement("div");
  card.classList.add("card");
  books.appendChild(card);
  for (key in myLibrary[i]) {
    const para = document.createElement("p");
    para.classList.add("myPara");
    para.textContent = `${key}: ${myLibrary[i][key]}`;
    card.appendChild(para);
  }
  // remove cards and add remove button
  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-book-button");
  removeBookButton.textContent = "Remove";
  card.appendChild(removeBookButton);
  removeBookButton.addEventListener("click", removeBookFromLibrary);
  function removeBookFromLibrary() {
    card.remove();
  }
  // add read button and change read status
  const addReadButton = document.createElement("button");
  addReadButton.classList.add("read-book-button");
  addReadButton.textContent = "Read?";
  card.appendChild(addReadButton);
  addReadButton.dataset.linkedArray = i;
  addReadButton.addEventListener("click", changeReadStatus);
  function changeReadStatus() {
    let value = card.childNodes[3].innerHTML;
    const changedText = {
      Yes: "Read: Yes",
      No: "Read: No",
    };
    if (value == changedText.Yes) {
      card.childNodes[3].innerHTML = changedText.No;
    } else {
      card.childNodes[3].innerHTML = changedText.Yes;
    }
  }
  // increment the index
  i++;
}
// event listner to dispaly the form when user clicks on add-book-button
let addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);
function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
}
// start eventListner and add input values of form to myLibrary
let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", inTakeFormData);
function inTakeFormData() {
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;
  // check input values empty or not
  if (Title == "" || Author == "" || Pages == "") {
    return;
  }
  // if input values are correct the add the info in library
  addBookToLibrary(Title, Author, Pages, Read);
  clearForm();
  document.getElementById("add-book-form").style.display = "none";
}
// to reset the form
clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);
// function for clear the form
function clearForm() {
  document.getElementById("add-book").reset();
}
