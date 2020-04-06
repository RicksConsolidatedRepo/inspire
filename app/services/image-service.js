import Image from "../models/image.js"
import store from "../store.js";
// @ts-ignore
const imgApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=pWduWfwX1mEgvVM9Mml2ESlhOGMj8fUPq4zcnHg4",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  async getImage() {
    let res = await imgApi.get("");
    let image = new Image(res.data)
    store.commit("image", image);
  }
}

const imageService = new ImageService();
export default imageService;
