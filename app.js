var books = [
    {
        title: 'Learning JavaScript',
        author: 'Code Man',
        publishedYear: 2023,
        pages: 123
    },
    {
        title: 'Random Book #1',
        author: 'Random Man',
        publishedYear: 2019,
        pages: 128
    }
];

function findingItemInBook(name,prop){
    for(let i = 0; i < books.length; i++){
        if(books[i].title === name){
            if(prop in books[i]){
                return books[i][prop];
            } else{
                return "No property exists in this book.";
            }
        }
    }
    return "No such book exists";
}

function addingBookToLibrary(title,author,publishedYear){
    for(let i = 0; i < books.length;i++){
        if(books[i].title === title){
            return "Sorry this book already exists in the library.";
        }
    }

    const newBook = {
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    books.push(newBook);
    return "Book added!";
}

function removingBookFromLibrary(title,author,publishedYear){
    for(let i = 0; i < books.length;i++){
        if(books[i].title === title){
            books.pop(books[i]);
        }
    }

}


console.log(findingItemInBook("The Catcher in the Rye", "genre"));
console.log(findingItemInBook("Learning JavaScript", "author"));

console.log(addingBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 1925));

console.log(findingItemInBook("The Great Gatsby", "author"));