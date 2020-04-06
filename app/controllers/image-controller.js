import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function drawImage() {
  document.body.style.backgroundImage = `url('${store.State.image.url}')`;
  document.body.classList.add('bg-image')
}
export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage)
    
    ImageService.getImage();
  }
}
