export default class GifApi {
  static fetchGifs(searchTerm) {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=SGFR10G5ENf4Rr5BsmhuSfN8eAvxHCSP&q=${
        searchTerm
      }&limit=10&offset=0&rating=G&lang=en`
    ).then(res => res.json());
  }
}
