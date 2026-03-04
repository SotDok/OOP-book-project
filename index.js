function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, that for now I ${this.haveRead}, has a sale and I'm going to buy it ASAP!`
    );
  };
}

const firstBook = new Book(
  'O trofimos',
  'Emilios Gkletsos',
  420,
  "haven't read"
);

const secondBoek = new Book('PEZOS', 'Afoi gkagkatsi', 890, 'have read');

Object.getPrototypeOf(firstBook) === Book.prototype;
Object.getPrototypeOf(secondBoek) === Book.prototype;

Book.prototype.givePrice = function () {
  console.log('Hello I am so expensive!');
};

firstBook.givePrice();
secondBoek.givePrice();

Object.getPrototypeOf(Book.prototype) === Object.prototype;

firstBook.valueOf();
