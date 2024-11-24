const books = document.querySelector("#books")

const MyLibrary = [];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book("How to", "James May","2024")
const book2 = new Book("hello", "my man","2022")
MyLibrary.push(book1, book2)


function addBookToLibrary(title, author, year) {
    const newBook = new Book(title, author, year);
    MyLibrary.push(newBook);
    books.innerHTML = " "
    displayBooks()
}



function displayBooks() {
    for (i = 0; i < MyLibrary.length; i++) {
        books.innerHTML += `<div class="book">
                            <h1>Title: ${MyLibrary[i].title}</h1>
                            <p>Author: ${MyLibrary[i].author}</p>
                            <p>Year: ${MyLibrary[i].year}</p>
                            <button class="remove_btn" onclick="removeBook(${i})">remove</button>
                            </div>`
    }
}

function removeBook(num) {
    MyLibrary.splice(num, 1)
    books.innerHTML = " "
    displayBooks()
}

function addBook() {
    books.innerHTML += `<dialog open>
                            <form method="dialog"> 
                            <lable for="title">Title</lable>
                            <input type="text" id="title" name="title">
                            <lable for="author">Author</lable>
                            <input type="text" id="author" name="author">
                            <lable for="year">Year</lable>
                            <input type="text" id="year" name="year">
                            <button onclick="addBookToLibrary(this.form.title.value,this.form.author.value,this.form.year.value)">Add</button>
                            </form>
                        </dialog>`
}
displayBooks()