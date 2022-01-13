//project objects
const ui = new UI();
const ls = new LS();

// define elements
const form = document.querySelector("form");

// events
form.addEventListener("submit", addBook);


// addBook function
function addBook(event) {

    const authorInput = document.querySelector("#authorInput");
    const titleInput = document.querySelector("#titleInput");
    const ISBNInput = document.querySelector("#ISBN");

    const author = authorInput.value;
    const title = titleInput.value;
    const ISBN = ISBNInput.value;

    const book = new Book(title, author, ISBN);
    // add book to UI
    ui.addBook(book);
    // add book to LS
    ls.addBook(book);

    //clear inputs
    titleInput.value = "";
    authorInput.value = "";
    ISBNInput.value = "";

    event.preventDefault();
}