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
