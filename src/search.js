import { API_KEY } from './config';
import { queryBooks } from './rest-service';
import stringifyBookItem from './utils';
import selectBook from './prompt';
import { addBook } from './file-service';

export async function search(args) {
  const apiKey = API_KEY;

  let queryStr = args._.slice(1).join('');

  const { data } = await queryBooks(queryStr, apiKey);

  const booksArr = data.items;

  booksArr.forEach((item, index) => {
    console.log(`${index + 1} ${stringifyBookItem(item)}`);
  })

  const selectedBook = await selectBook();

  await addBook(stringifyBookItem(booksArr[selectedBook - 1]));
}