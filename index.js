const addBookForm = document.getElementById('addBookForm')
const modal = document.getElementById('modal')
const enterNewBookBtn = document.getElementById('enterBtn')
const addNewBookBtn = document.getElementById('addNewBookBtn')
const overlay = document.querySelector('.overlay')
const isReadBtn = document.querySelectorAll('.book[class="isRead"]')
const library = JSON.parse(localStorage.getItem('library')) || []

function openModal() {
    addBookForm.reset()
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
function displayLibrary() {
    const grid = document.querySelector('#grid')
    const resetBookGrid = () => {
        grid.innerHTML = ''
    }
    const gridCreation = (item) => {
        const card = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const readBtn = document.createElement('button')
        const isRead = item.isRead ? 'Read' : 'Not Read'

        grid.appendChild(card)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(readBtn)

        title.textContent = item.title
        author.textContent = item.author
        readBtn.textContent = isRead
        readBtn.onclick = changeRead

        card.classList.add('book')
        readBtn.classList.add('isRead')
        item.isRead ? readBtn.classList.add('active') : ''

    }
    resetBookGrid()
    for (const book of library) {
        gridCreation(book)
    }
}

function Book(
    title = 'No Title',
    author = 'No Author',
    isRead = false
) {
    this.title = title
    this.author = author
    this.isRead = isRead
}

function enterNewBook(e) {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isRead = document.querySelector('#isRead').checked
    const newBook = new Book(title, author, isRead)
    library.push(newBook)
    closeModal()
    displayLibrary()
    saveLocal()
}
function changeRead() {
    const title = this.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    )
    const findBook = () => {
        return library.find(book => book.title === title)
    }
    const book = findBook()
    book.isRead = !book.isRead
    displayLibrary()
    saveLocal()
}

enterNewBookBtn.addEventListener('click', enterNewBook)
isReadBtn.forEach(btn => btn.addEventListener('click', changeRead))
addNewBookBtn.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)

//local Storage
displayLibrary()
const saveLocal = () => {
    localStorage.setItem('library', JSON.stringify(library))
}
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