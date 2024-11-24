const books = document.querySelector("#books")

const MyLibrary = [];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read
}

const book1 = new Book("How to", "James May","2024", "No")
const book2 = new Book("hello", "my man","2022", "Yes")
MyLibrary.push(book1, book2)


function addBookToLibrary(title, author, year) {
    const newBook = new Book(title, author, year, read);
    MyLibrary.push(newBook);
    displayBooks()
}



function displayBooks() {
    books.innerHTML = " "
    for (i = 0; i < MyLibrary.length; i++) {
        books.innerHTML += `<div class="book">
                            <h1>Title: ${MyLibrary[i].title}</h1>
                            <p>Author: ${MyLibrary[i].author}</p>
                            <p>Year: ${MyLibrary[i].year}</p>
                            <p>Read: ${MyLibrary[i].read}</p>
                            <button class="book_btn" onclick="bookRead(${i})">Read</button>
                            <button class="book_btn" onclick="removeBook(${i})">remove</button>
                            </div>`
    }
}

function removeBook(num) {
    MyLibrary.splice(num, 1)
    displayBooks()
}

function bookRead(num) {
    var status = MyLibrary[num].read;
    if (status.toUpperCase() == "YES") {
        MyLibrary[num].read = "No"
    }
    else {
        MyLibrary[num].read = "Yes"
    }
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
                            <lable for="read">Have you read it</lable>
                            <input type="text" id="read" name="read">
                            <button onclick="addBookToLibrary(this.form.title.value,this.form.author.value,this.form.year.value,this.form.read.value)">Add</button>
                            </form>
                        </dialog>`
}
displayBooks()