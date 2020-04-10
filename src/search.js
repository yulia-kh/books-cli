import { API_KEY } from './config';
import { queryBooks } from './rest-service';
import { stringifyBookItem } from './utils';
import selectBook from './prompt';
import { addBook } from './file-service';

export async function search(args) {
  const apiKey = API_KEY;

  let queryStr = args._.slice(1).join('');

  try {
    const { data } = await queryBooks(queryStr, apiKey);


    if (!data.items || data.totalItems === 0) {
      console.log('Sorry, your search didn`t return any result. Try to modify your search query.');
      return;
    }
  
    const booksArr = data.items;
  
    booksArr.forEach((item, index) => {
      console.log(`${index + 1} ${stringifyBookItem(item)}`);
    })
  
    const selectedBook = await selectBook(booksArr.length);
  
    if (selectedBook === 0) {
      console.log('Nothing was added to the reading list');
      return;
    }
  
    await addBook(stringifyBookItem(booksArr[selectedBook - 1]));
  }
  catch(e){
    console.log('Something went wrong');
  }


}