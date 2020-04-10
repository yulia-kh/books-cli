const prompts = require('prompts');
 
export default async function selectBook(booksCount) {
  const response = await prompts({
    type: 'number',
    name: 'choice',
    message: 'What book would you like to add to your reading list(type a number and use up/down to increase/decrease the value)?',
    initial: 0,
    style: 'default',
    min: 0,
    max: booksCount
  });
 
  return response.choice;
}
