import { API_KEY } from './config';
import { queryBooks } from './rest-service';
import stringifyBookItem from './utils';

export async function search(args) {
  const apiKey = API_KEY;

  let queryStr = args._.slice(1).join('');

  const { data } = await queryBooks(queryStr, apiKey);

  const booksArr = data.items;

  booksArr.forEach(item => {
    console.log(stringifyBookItem(item));
  })
}