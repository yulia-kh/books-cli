import stringifyBookItem from './utils';

describe('returns correct string', () => {
  it('returns valid string if valid input', () => {
    const testBookObj = {
      "volumeInfo": {
        "title": "The Flower Book",
        "authors": [
          "Rachel Siegfried"
        ],
        "publisher": "Penguin"
      }
    }
    expect(stringifyBookItem(testBookObj)).toEqual("The Flower Book by Rachel Siegfried. Publisher: Penguin");
  })

  it('returns N/A if publisher is undefined', () => {
    const noPublisher = {
      "volumeInfo": {
        "title": "Title",
        "authors": ["author"]
      }
    }
    expect(stringifyBookItem(noPublisher)).toEqual("Title by author. Publisher: N/A");
  })

  it('returns a list of authors', () => {
    const withAuthors = {
      "volumeInfo": {
        "title": "Title",
        "authors": ["author1", "author2"],
        "publisher": "publisher"
      }
    }
    expect(stringifyBookItem(withAuthors)).toEqual("Title by author1, author2. Publisher: publisher");
  })

  it('returns empty string if book object is not provided', () => {
    expect(stringifyBookItem({})).toEqual("Something went wrong");
  })
  
})