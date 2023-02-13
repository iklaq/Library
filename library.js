// declare empty array for library
let myLibrary = [];
//object constructor
function bookDetails(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// function to add a new book to library
function addBookToLibrary(title, author, pages, read) {
  const book = new bookDetails(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage(myLibrary);
}
//initialize new card with book details
function createCard(myLibrary, card) {
  const i = myLibrary.length-1;
  for (key in myLibrary[i]) {
    const para = document.createElement("p");
    para.classList.add("myPara");
    para.textContent = `${key}: ${myLibrary[i][key]}`;
    card.appendChild(para);
  }
}
// add remove button and remove card
function createRemoveButton(card){
  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-book-button");
  removeBookButton.textContent = "Remove";
  card.appendChild(removeBookButton);
  removeBookButton.addEventListener("click", removeBookFromLibrary);
  function removeBookFromLibrary() {
    card.remove();
  }
}
// add read button and change read status
function createReadButton(card) {
  const addReadButton = document.createElement("button");
  addReadButton.classList.add("read-book-button");
  addReadButton.textContent = "Read?";
  card.appendChild(addReadButton);
  addReadButton.addEventListener("click", changeReadStatus);
  function changeReadStatus() {
    const value = card.childNodes[3].innerHTML;
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
}
//for displaying the books in library
function displayBooksOnPage(myLibrary) {
  const books = document.querySelector(".books");
  const card = document.createElement("div");
  card.classList.add("card");
  books.appendChild(card);
  createCard(myLibrary,card);
  createRemoveButton(card);
  createReadButton(card);
}

// **main
// event listner to dispaly the form when user clicks on add-book-button
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayForm);
function displayForm() {
  document.getElementById("add-book-form").style.display = "";
}
// start eventListner and add input values of form to myLibrary
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", submitNewBook);
function submitNewBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  // check input values empty or not
  if (title == "" || author == "" || pages == "") {
    return;
  }
  // if input values are correct the add the info in library
  addBookToLibrary(title, author, pages, read);
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
