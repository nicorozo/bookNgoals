const addBookForm = document.getElementById('addBookForm')
const modal = document.getElementById('modal')
const enterNewBookBtn = document.getElementById('enterBtn')
const addNewBookBtn = document.getElementById('addNewBookBtn')
const overlay = document.querySelector('.overlay')
const isReadBtn = document.querySelectorAll('.book[class="isRead"]')
const library = JSON.parse(localStorage.getItem('library')) || []

function Book(
    title = 'No Title',
    author = 'No Author',
    isRead = false
) {
    this.title = title
    this.author = author
    this.isRead = isRead
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
        const removeBookBtn = document.createElement('button')

        grid.appendChild(card)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(readBtn)
        card.appendChild(removeBookBtn)

        title.textContent = item.title
        author.textContent = item.author
        readBtn.textContent = isRead
        readBtn.onclick = changeRead
        readBtn.onclick = removeBook

        card.classList.add('book')
        readBtn.classList.add('isRead')
        item.isRead ? readBtn.classList.add('active') : ''
        removeBookBtn.classList.add('remove-book-btn')

        removeBookBtn.innerText = 'Remove Book'

    }
    resetBookGrid()
    for (const book of library) {
        gridCreation(book)
    }
}

function enterNewBook(e) {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isRead = document.querySelector('#isRead').checked
    const newBook = new Book(title, author, isRead)
    library.push(newBook)
    displayLibrary()
    saveLocal()
    closeModal()
    e.preventDefault()// for some reason this exited the code, therefore is at the end
}
function changeRead() {
    const title = this.parentNode.firstChild.innerHTML.replaceAll('"', '')
    const findBook = () => library.find(book => book.title === title)
    const book = findBook()
    book.isRead = !book.isRead
    displayLibrary()
    saveLocal()
}
function removeBook() {
    const title = this.parentNode.firstChild.innerHTML.replaceAll('"', '')
    //const findBook = () => library.find(book => book.title === title)

}
function openModal() {
    addBookForm.reset()
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

isReadBtn.forEach(btn => btn.addEventListener('click', changeRead))
addNewBookBtn.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)

//local Storage
displayLibrary()
const saveLocal = () => {
    localStorage.setItem('library', JSON.stringify(library))
}