# Books-cli
Command line interface app that consumes Google Books Api and displays list of 5 books according to a query. You can choose what book to save in your reading list. If you don't want to save anything enter 0.

## Getting started
You need [Node.js](https://nodejs.org) installed on your computer.

 - Clone the repository and `cd` to the folder
 - Run `npm install -g books-cli`
 - Run `npm link` to allow runnig the `books` command (You might need to run it as a super user - `sudo npm link`)
 - Obtain API Key from [Google Books Api](https://cloud.google.com/docs/authentication/api-keys) 
 - Create .env file in the root directory and set API_KEY=yourApiKey
 
## Available commands
`books help` - list available commands

`books version` - check app version

`books search <your query>` - return list of five books that contain the query string

`books list` - show reading list

## Uninstal app
Run `sudo npm uninstall` to uninstall the app
