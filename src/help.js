const menus = {
    main: `
      search......................search books
      list........................show my reading list
      version <your query>........show package version
      help........................show help menu for a command
    `
}

export async function help(args) {
    console.log(menus.main);
}