// Q3 - Library Management System (Classes + Objects)
"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Atomic Habits", "James Clear", "ISBN002"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} by ${book.author} (${book.isbn})`));

function issueBookByISBN(isbn) {
    const book = books.find(item => item.isbn === isbn);
    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    book.issueBook();
}

// Demonstrate searching by ISBN and issuing a book.
issueBookByISBN("ISBN002");
