const myLibrary = [];

function Book(id, title, author, pages, haveRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  
}

const firstBook = new Book(
    1,
  'O trofimos',
  'Emilios Gkletsos',
  420,
  "haven't read"
);



function addBookToLibrary(title, author, pages, haveRead){
    const id = crypto.randomUUID();
    const newBook = new Book (id, title, author, pages, haveRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

addBookToLibrary('O trofimos', 'Emilios Gkletsos', 420, "haven't read");
addBookToLibrary('PEZOS', 'Afoi gkagkatsi', 890, 'have read');
addBookToLibrary('Paralitos', 'Alfonso Davies', 569, 'have not read');
addBookToLibrary('TestoSteroni', 'Petra Petra', 1000, 'have read');
addBookToLibrary('Amore mio', 'Evi Rountou', 6969, 'have not read');

function displayBooks(arr){
    const bookList = document.querySelector('.book-list');  
    bookList.innerHTML = '';

    arr.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title.toUpperCase()} by ${book.author}, ${book.pages}, ${book.haveRead}`;
        bookList.appendChild(li);
    })
}

displayBooks(myLibrary);
