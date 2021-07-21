// const person = {
//   name: "Jackson",
//   lasName: "Pires",
// }

// person.age = 41;
// person['pet'] = 'dog';

// console.log(Object.keys(person));
// // console.table(person['name']);

const books = {
  collection: 'The lord of the rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  bokk3: 'Return of the king'
}

const bookAuthor = {
  authorName: 'J. R. R. Tolkien'
}

Object.assign(books, bookAuthor);

console.log(books);