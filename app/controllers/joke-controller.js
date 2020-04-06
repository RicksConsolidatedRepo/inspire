import JokeService from "../services/joke-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function drawJoke() {
  document.getElementById("joke").innerHTML = store.State.joke.JokeTemplate;
}
export default class JokeController {
  constructor() {
    store.subscribe("joke", drawJoke);
    JokeService.getJoke();
  }
}
