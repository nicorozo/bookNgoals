const closeBtn = document.getElementById('closeBtn')
const formContainer = document.getElementById('formContainer')
const modal = document.getElementById('modal')


// button event listener for enter new book, add new book, close modal
const enterBtn = document.getElementById('enterBtn')
enterBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addToBookLibrary()
})
const addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    modal.style.display = 'flex'
})
window.addEventListener('click', function (e) {
    if (e.target === closeBtn || e.target === enterBtn) {
        e.preventDefault()
        modal.style.display = 'none';
    }
})
//Book constructor
class Book {
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
}