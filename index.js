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



function addBookToLibrary(title, author, pages, haveRead) {
    const id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, haveRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

addBookToLibrary('O trofimos', 'Emilios Gkletsos', 420, "haven't read");
addBookToLibrary('PEZOS', 'Afoi gkagkatsi', 890, 'have read');
addBookToLibrary('Paralitos', 'Alfonso Davies', 569, 'have not read');
addBookToLibrary('TestoSteroni', 'Petra Petra', 1000, 'have read');
addBookToLibrary('Amore mio', 'Evi Rountou', 6969, 'have not read');

Book.prototype.toggleRead = function() {
    if (this.haveRead === "Have read") {
        this.haveRead = "Haven't read";
    } else {
        this.haveRead = "Have read";
    }
};


//Appear all books 
function displayBooks(arr) {
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = '';

    arr.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title.toUpperCase()} by ${book.author}, ${book.pages}, ${book.haveRead}. `;
        li.style.cssText = `
         background-color: #f0f0f0;  
  border: 1px solid #ccc;     
  border-radius: 8px;          
  margin: 10px 0;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1); 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  font-family: Arial, sans-serif;
        `;
        bookList.appendChild(li);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.style.cssText = `
                background-color: #f44336; /* red */
                color: white;
                padding: 5px 10px;
                font-size: 14px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.2s ease, transform 0.1s ease;
`;
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            // Find index of current book
            const index = myLibrary.indexOf(book);

            if (index > -1) {
                myLibrary.splice(index, 1); //remove it from array
            }

            // Re-render the list
            displayBooks(myLibrary);
        });
        //Button to toggle the have read option
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.style.cssText = `
  background-color: #2196F3; 
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

        li.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            book.toggleRead();
            displayBooks(myLibrary);
        })
    })

}

displayBooks(myLibrary);

//Created the add book button
const container = document.querySelector("#card")
const newBookBtn = document.createElement("button");
newBookBtn.textContent = "Create new Book";
newBookBtn.style.cssText = `
 background-color: #4CAF50; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

container.appendChild(newBookBtn);

const form = document.getElementById("book-form");
form.style.display = 'none';

form.style.cssText += `      
  width: 450px;          
  max-width: 90%;         
  margin: 30px auto;      
  padding: 30px;          
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.15);
  font-family: Arial, sans-serif;
  font-size: 16px;
`;
newBookBtn.addEventListener("click", () => {
    form.style.display = 'block';

});

const inputs = form.querySelectorAll('input[type="text"], input[type="number"]');
inputs.forEach(input => {
    input.style.cssText = `
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
  `;
});

const addBookBtn = document.querySelector(".add-book");
addBookBtn.style.cssText = `
background-color: #4CAF50; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;`
    ;

form.appendChild(addBookBtn);
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').checked ? "Have read" : "Haven't read";

    addBookToLibrary(title, author, pages, haveRead);

    displayBooks(myLibrary);
    form.style.display = 'none';
    form.reset();
    
})




