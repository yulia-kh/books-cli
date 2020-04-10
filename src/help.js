const menus = {
    main: `
      search <your query>.................search books
      list................................show my reading list
      version.............................show package version
      help................................show help menu for a command
    `
}

export async function help(args) {
    console.log(menus.main);
}