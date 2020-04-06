import store from "../store.js";
import Clock from "../models/clock.js"
class ClockService {
  getTime() {
    store.commit("clock", new Clock())
  }
}

const clockService = new ClockService();
export default clockService;