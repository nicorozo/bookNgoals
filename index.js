const addBookForm = document.getElementById('addBookForm')
const modal = document.getElementById('modal')
const enterNewBookBtn = document.getElementById('enterBtn')
const addNewBookBtn = document.getElementById('addNewBookBtn')
const overlay = document.querySelector('.overlay')

function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal() {
    addBookForm.reset()
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

addNewBookBtn.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)
//Book constructor
/* class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}
// create book from Constructor and add to library
let myLibrary = []
let book1;

function addToBookLibrary() {

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value

    book1 = new Book(title, author)
    myLibrary.push(book1)
    setData() //saves updated array in local storage
    render()

}

function render() {
    const grid = document.getElementById('grid')
    const books = document.querySelectorAll('.book');
    books.forEach(book => grid.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

function createBook(item) {

    const bookCard = document.createElement('div')
    bookCard.classList.add('book')
    grid.appendChild(bookCard)

    const h3Title = document.createElement('h3')
    h3Title.textContent = item.title
    bookCard.appendChild(h3Title)

    const pAuthor = document.createElement('p')
    pAuthor.textContent = item.author
    bookCard.appendChild(pAuthor)
}


function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
} */