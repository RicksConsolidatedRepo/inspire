import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function drawQuote(){
    let template = ''
    let quote = store.State.quote

    template += quote.Template
    document.getElementById("quote").innerHTML = template
    console.log("Today's quote is" + store.State.quote)
}
export default class QuoteController {
    constructor(){
        store.subscribe("quote", drawQuote)
        QuoteService.getWeather();
        
    }
}