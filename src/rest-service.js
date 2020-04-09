import axios from 'axios';

export async function queryBooks(query, apiKey) {
    const baseURI = 'https://www.googleapis.com/books/v1/volumes';
    let quantity = 5;
    const url = `${baseURI}?q=${query}&key=${apiKey}&maxResults=${quantity}`;
    return await axios({
        method: 'get',
        url: url
    });
}