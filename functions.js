const books = document.querySelector("#books")

const MyLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book("How to", "James May","2024")
MyLibrary.push(book1)


function addBookToLibrary(title, author, year) {
    const newBook = new Book(title, author, year);
    MyLibrary.push(newBook0);
}

function displayBooks() {
    for (i = 0; i < MyLibrary.length; i++) {
        books.innerHTML += `<div class="book">
                            <h1>Title: ${MyLibrary[i].title}</h1>
                            <p>Author: ${MyLibrary[i].author}</p>
                            <p>Year: ${MyLibrary[i].year}</p>
                            </div>`
    }
}

displayBooks()