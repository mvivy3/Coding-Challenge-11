// Task 1: Creating a Book Class

// Create a class book with the following properties
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }; 
getDetails(){ // Add a getDetails method
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // Returns a formatted string of book details
};
updateCopies(quantity) { //Add a method updateCopies(quantity)
    this.copies += quantity; // Modifies the available copies when a book is borrowed or returned
}
}

// Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Creating a Borrower Class

// Create a class Borrower with the following properties
class Borrower {
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; // Array of borrowed book titles
    };
borrowBook(book){ // Add a method borrowBook(book)
    this.borrowedBooks.push(book); // Adds a book title to borrowedBooks
}
returnBook(book){ // Add a method returnBook(book)
    this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // Removes the book from borrowedBooks
}
}

// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

// Task 3: Creating a Library Class

// Create a class Library 
class Library {
    constructor(){
        this.books = [];
        this.borrowers = [];
    };
addBook(book){ // Adds a new book to the library
    this.books.push(book); 
}
listBooks(){ // Logs all books' details
    this.books.forEach(books => console.log(books.getDetails()));
}
}
// Task 4: Implementing Book Borrowing
lendBook(borrowerId, isbn); {
    let book = this.books.find(bk => bk.isbn === isbn); // finds book by isbn
    let borrower = this.borrowers.find(br => br.borrowerId === borrowerId); // finds borrower by id
    if (!book) {
        console.log("No book found");
    } if (!borrower) {
        console.log ("No borrower found");
    } if (book.copies > 0) {
        book.updateCopies(-1); // Reduce book copies by 1
        borrower.borrowBook(book);
        console.log("Book borrowed");
    } else {
        console.log("No copies available")
    };
};
///Test Cases
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
// Task 5: Implementing Book Returns
returnBook(borrowerId, isbn); { // Add a method in the library class
    const borrower = this.borrowers.find(br => br.borrowerId === borrowerId); //
    const book = this.books.find(bk => bk.isbn === isbn); // 
    if (book) {
        book.updateCopies(1); // Increases the book's available copies
        if (borrower) {
            borrower.returnBook(book); // Removes the book from the borrower's borrowed list
        }
        }
}

// Task 3 Test Cases
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4: Implementing Book Borrowing

// Add a method lendBook(borrowerId, isbn) in the Library class


// Task 4 Test Cases
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Task 5 Test Cases
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []
