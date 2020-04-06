import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import JokeController from "./controllers/joke-controller.js";
import QuoteController from "./controllers/quote-controller.js"
import ImageController from "./controllers/image-controller.js";
import ClockController from "./controllers/clock-controller.js"

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.jokeController = new JokeController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    this.clockController = new ClockController();
  }
}

window["app"] = new App();
