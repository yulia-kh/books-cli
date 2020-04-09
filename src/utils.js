export default function stringifyBookItem(item) {
    if (!item || !item.volumeInfo) {
        return "Something went wrong";
    }

    let { title, authors, publisher } = item.volumeInfo;

    title = title ? title : 'N/A';
    authors = authors ? authors.join(', ') : "N/A";
    publisher = publisher ? publisher : "N/A";
    return `${title} by ${authors}. Publisher: ${publisher}`;
  }