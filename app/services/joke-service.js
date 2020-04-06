import store from "../store.js";
import Joke from "../models/joke.js";

// @ts-ignore
const _jokeApi = axios.create({
  baseURL: "http://api.icndb.com/jokes/random/",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class JokeService {
  async getJoke() {
    let value = await _jokeApi.get("");
    store.commit("joke", new Joke(value.joke));
  }
}

const jokeService = new JokeService();
export default jokeService;
