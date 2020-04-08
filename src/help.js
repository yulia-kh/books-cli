const menus = {
    main: `
      search..................search books
      list....................show my reading list

    `

}

export async function help(args) {
    console.log(menus.main);
}