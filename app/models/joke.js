export default class Joke {
  constructor(value) {
    this.joke = value.joke.body
  }

  get JokeTemplate() {
    return `
          <h4>${this.joke}</h4>
    `
  }
}