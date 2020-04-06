import store from "../store.js";
import clockService from "../services/clock-service.js";

function drawClock() {
  document.getElementById("clock").innerHTML = store.State.clock.ClockTemplate;
}
function getTime() {
  clockService.getTime();
}
export default class ClockController {
  constructor() {
    store.subscribe("clock", drawClock);
    setInterval(function () {
      getTime();
    }, 5000)
  }
}