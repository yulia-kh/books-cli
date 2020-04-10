const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../reading-list.txt');

export async function showList() {
  fs.readFile(filePath, 'utf8', await function(err, data) {
    if (err) {
      console.log('Could not find reading-list.txt. Try to add an item in your list');
    } else
    console.log(data);
  })
}

export function addBook(book) {
  fs.appendFile(filePath, book + '\n', (err) => {
    if (err) throw err;
    console.log('The reading list was updated');
  })
}