// exc 1

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers);
console.log("-----------------------------------");

// exc 2

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

// q1
const highlyRatedBooks = books.filter(book => book.ratings > 4);

console.log(highlyRatedBooks);
console.log("-----------------------------------");

// q2
const bookTitles = books.map(book => book.title);

console.log(bookTitles);
console.log("-----------------------------------");

// q3
const foundBook = books.find(book => book.title === '1984');

console.log(foundBook);
console.log("-----------------------------------");

// q4
const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings);

console.log(sortedBooks);
console.log("-----------------------------------");

//q5
const highestRatedTitle = [...books].sort((a, b) => b.ratings - a.ratings)[0].title;

console.log(highestRatedTitle);
console.log("-----------------------------------");

// exc 3
const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

// q1
const { id, name, courses } = student;
const { father, mother } = student.parents;

console.log(id);
console.log(name);
console.log(father);
console.log("-----------------------------------");

// q2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1];

console.log(arr3);
console.log(arr4);
console.log("-----------------------------------");

//q3
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const firstHalf = number.slice(0, 5);
const secondHalf = number.slice(5);

console.log(firstHalf);
console.log(secondHalf);
console.log("-----------------------------------");

//  q4
const nums = [ 1, 2, 3 ];

function sum(a, b, c) {
    return a + b + c;
}
const result = sum(...nums);

console.log(result);
console.log("-----------------------------------");

// exc4

// q1
const book = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
  publication: {
    year: 1937,
    publisher: 'George Allen & Unwin'
  }
};

const { title, author, characters } = book;
const { publication: { year, publisher }} = book
const { publication } = book

console.log(title);
console.log(author);
console.log(characters);
console.log(publication);
console.log("-----------------------------------");

// q2
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); 

const obj4 = { ...obj1 };
console.log(obj4); 
console.log("-----------------------------------");

// q4
const data = [1, 2, 3, 4, 5, 6, 7, 8];

const array1 = data.slice(0, 4);
const array2 = data.slice(4);
const array3 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3); 