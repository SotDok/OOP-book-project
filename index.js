const myLibrary = [];

class Book {
    constructor(id, title, author, pages, haveRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }
}


// function addBookToLibrary(title, author, pages, haveRead) {
//     const id = crypto.randomUUID();
//     const newBook = new Book(id, title, author, pages, haveRead);
//     myLibrary.push(newBook);
//     console.table(myLibrary);
// }

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.table(myLibrary);
}

// addBookToLibrary('O trofimos', 'Emilios Gkletsos', 420, "haven't read");
// addBookToLibrary('PEZOS', 'Afoi gkagkatsi', 890, 'have read');
// addBookToLibrary('Paralitos', 'Alfonso Davies', 569, 'have not read');
// addBookToLibrary('TestoSteroni', 'Petra Petra', 1000, 'have read');
// addBookToLibrary('Amore mio', 'Evi Rountou', 6969, 'have not read');

const book1 = new Book(crypto.randomUUID(), "O trofimos", "Emilios Gkletsos", 420, "Haven't read");
const book2 = new Book(crypto.randomUUID(), "Pezos", "Afoi gkagkatsi", 890, "Have read");
const book3 = new Book(crypto.randomUUID(), "Paralitos", "Alfonso Davies", 569, "Haven't read");
const book4 = new Book(crypto.randomUUID(), "TestoSteroni", "Petra Petra", 1000, "Have read");
const book5 = new Book(crypto.randomUUID(), "Amore mio", "Evi Rountou", 6969, "Haven't read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);


Book.prototype.toggleRead = function () {
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

    if (!arr.length) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = "No books in the library. Start reading mate!";
        bookList.appendChild(emptyMsg);
        empltyMsg.style.cssText = `
        font-size: 18px;
        `;
        return;
    }

    arr.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title.toUpperCase()} by ${book.author}, ${book.pages}, ${book.haveRead}. `;
        //         li.style.cssText = `
        //          background-color: #f0f0f0;  
        //   border: 1px solid #ccc;     
        //   border-radius: 8px;          
        //   margin: 10px 0;
        //   box-shadow: 2px 2px 5px rgba(0,0,0,0.1); 
        //   display: flex;
        //   justify-content: space-between; 
        //   align-items: center;
        //   font-family: Arial, sans-serif;
        //         `;
        bookList.appendChild(li);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.style.cssText = `
                background-color: #f44336; 
                color: white;
                padding: 5px 10px;
                font-size: 14px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                
`;

        deleteBtn.addEventListener('mouseover', () => {
            deleteBtn.style.backgroundColor = "#d32f2f";
        });

        deleteBtn.addEventListener('mouseout', () => {
            deleteBtn.style.backgroundColor = "#f44336";
        });

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

        toggleBtn.addEventListener('mouseover', () => {
            toggleBtn.style.backgroundColor = "#1976D2";
        })

        toggleBtn.addEventListener('mouseout', () => {
            toggleBtn.style.backgroundColor = "#2196F3";
        });

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
newBookBtn.className = `
    bg-green-500 
    hover:bg-green-600 
    text-white 
    font-semibold 
    py-2 px-4 
    rounded-lg 
    shadow-lg 
    transition 
    duration-200 
    ease-in-out
    transform
    hover:scale-105
`;

container.appendChild(newBookBtn);

const form = document.getElementById("book-form");
form.style.display = 'none';

// form.style.cssText += `      
//   width: 450px;          
//   max-width: 90%;         
//   margin: 30px auto;      
//   padding: 30px;          
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   background-color: #f9f9f9;
//   box-shadow: 3px 3px 12px rgba(0,0,0,0.15);
//   font-family: Arial, sans-serif;
//   font-size: 16px;
// `;
newBookBtn.addEventListener("click", () => {
    form.style.display = 'block';

});

newBookBtn.addEventListener("mouseover", () => {
    newBookBtn.style.backgroundColor = "#green-600";
});

newBookBtn.addEventListener("mouseout", () => {
    newBookBtn.style.backgroundColor = "#4CAF50";
});

const inputs = form.querySelectorAll('input[type="text"], input[type="number"]');
// inputs.forEach(input => {
//     input.style.cssText = `
//     width: 100%;
//     padding: 12px;
//     margin-bottom: 15px;
//     border-radius: 6px;
//     border: 1px solid #ccc;
//     box-sizing: border-box;
//     font-size: 16px;
//   `;
// });

const addBookBtn = document.querySelector("#add-book");
addBookBtn.classList.add("add-book-btn");


form.appendChild(addBookBtn);
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').checked ? "Have read" : "Haven't read";

    //Create book instance
    const book = new Book(crypto.randomUUID(), title, author, pages, haveRead);

    //Add book to library
    addBookToLibrary(book);

    displayBooks(myLibrary);
    form.style.display = 'none';
    form.reset();

})




