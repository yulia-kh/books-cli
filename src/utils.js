export function stringifyBookItem(item) {
  if (!item || !item.volumeInfo) {
    return "Something went wrong. Try again later";
  }

  let { title, authors, publisher } = item.volumeInfo;

  title = title ? title : 'N/A';
  authors = authors ? authors.join(', ') : "N/A";
  publisher = publisher ? publisher : "N/A";
  return `${title} by ${authors}. Publisher: ${publisher}`;
}

export function containsQuery(args) {
  return args._.length > 1;
}